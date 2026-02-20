# Dashboard Ansible IA (Whisper + AWX)

Interfaz web de voz a ejecución en AWX.

## Qué hace hoy

1. Graba audio desde navegador con un botón de micrófono.
2. Muestra transcripción en vivo mientras hablas (Web Speech API).
3. Envía el audio al `whisper-server` local para transcripción final.
4. Interpreta el comando por voz contra un catálogo controlado.
5. Lanza automáticamente el template/workflow correspondiente en AWX.
6. Muestra resultado de ejecución (template detectado, job ID y enlace a AWX).

No hay botón manual de ejecutar: el flujo corre automático al terminar la grabación.

## Arquitectura

- Frontend: Next.js + TypeScript + Tailwind.
- Backend interno (API routes de Next.js):
	- `POST /api/transcribe` (proxy a Whisper)
	- `POST /api/execute` (transcribe + match + launch en AWX)
	- `GET /api/health-awx` (diagnóstico de conectividad/token AWX)
	- `GET /api/health-summary` (resumen de salud para asistente)
	- `POST /api/auth/login` (inicio de sesión)
	- `POST /api/auth/logout` (cierre de sesión)
	- `GET /api/auth/session` (estado de sesión)
	- `GET/POST/DELETE /api/auth/local-users` (gestión de usuarios locales)
- STT local: `whisper-server` en `http://127.0.0.1:5000`.
- Orquestación remota: AWX API v2 con token Bearer.

## Requisitos

- Node.js 20+
- `whisper-server` levantado en `WHISPER_SERVER_URL`
- AWX accesible desde esta máquina
- Token AWX con permisos para lanzar templates/workflows

## Variables de entorno

Configura `.env.local` con:

```dotenv
WHISPER_SERVER_URL=http://127.0.0.1:5000
AWX_BASE_URL=http://<host-awx>:10445
AWX_API_TOKEN=<tu_token>
AUTH_JWT_SECRET=<clave-larga-y-segura>

# Usuarios locales (opcional)
# Formato: correo:password;correo2:password2
LOCAL_AUTH_USERS=admin@empresa.com:ClaveSegura123;operador@empresa.com:OtraClaveSegura

# LDAP / Active Directory (opcional)
LDAP_URL=ldap://ad.empresa.local:389
LDAP_BASE_DN=DC=empresa,DC=local
LDAP_BIND_DN=CN=svc_dashboard,OU=Servicios,DC=empresa,DC=local
LDAP_BIND_PASSWORD=<password_cuenta_servicio>
LDAP_USER_FILTER=(mail={{email}})
LDAP_TIMEOUT_MS=5000

# Vercel KV / Upstash Redis (recomendado en producción)
KV_REST_API_URL=<url-rest-kv>
KV_REST_API_TOKEN=<token-rest-kv>

# Resumen de salud mock (opcional)
HEALTH_STEPS=7350
HEALTH_RESTING_HR=64
HEALTH_SLEEP_HOURS=7.1
HEALTH_STAND_HOURS=9

# Ingesta externa de salud (atajo iPhone / app puente)
HEALTH_INGEST_TOKEN=<token-largo-y-seguro>
```

Notas:
- `WHISPER_SERVER_URL` debe ser la URL base del servicio (ejemplo: `http://127.0.0.1:5000`), sin `/transcribe`.
- `AWX_BASE_URL` debe usar el protocolo real configurado en tu instancia (`http` o `https`).
- El backend elimina slash final automáticamente.
- `AUTH_JWT_SECRET` es obligatorio para emitir sesiones.
- El login intenta primero contra usuarios locales guardados en `uploads/local-users.json`, luego contra `LOCAL_AUTH_USERS` y por último LDAP (si está configurado).
- Si no configuras LDAP, puedes operar solo con usuarios locales.
- Los usuarios locales creados desde la UI se guardan en `uploads/local-users.json` con hash seguro + salt (no texto plano).
- `LOCAL_AUTH_USERS` se puede usar como bootstrap inicial y luego retirarse.
- Si `KV_REST_API_URL` y `KV_REST_API_TOKEN` están presentes, la app usa Vercel KV/Upstash para persistencia de usuarios locales.

## Autenticación

- El acceso a `/` y a las APIs operativas requiere sesión.
- Pantalla de login: `/login`.
- Gestión de usuarios locales: `/users`.
- Métodos admitidos:
	- LDAP / Active Directory por correo + contraseña.
	- Usuarios locales creados desde `/users`.
	- Usuarios locales definidos en `LOCAL_AUTH_USERS` (fallback/arranque).
- Endpoints de auth:
	- `POST /api/auth/login`
	- `POST /api/auth/logout`
	- `GET /api/auth/session`
	- `GET/POST/DELETE /api/auth/local-users` (gestión de usuarios locales)

## Gestión de usuarios locales

- La creación/edición/eliminación se hace desde `/users`.
- Se guarda únicamente `email`, `salt` y `passwordHash`.
- En producción con KV configurado, los usuarios se persisten en Vercel KV/Upstash.
- En local (sin KV), se usa `uploads/local-users.json`.
- No se almacenan contraseñas en texto plano.
- En entornos serverless sin KV configurado (ej. Vercel), el filesystem no es persistente; usa `LOCAL_AUTH_USERS` como respaldo.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Producción

Se incluye un runbook completo para Linux (systemd + Nginx + TLS):

- [PRODUCCION.md](PRODUCCION.md)

Archivos de despliegue incluidos:

- `deploy/systemd/dashboard-ansible-ia.service`
- `deploy/nginx/dashboard-ansible-ia.conf`
- `../whisper-server/deploy/systemd/whisper-server.service`

## Comandos de voz habilitados

La app está limitada a 5 ejecuciones configuradas en `src/config/command-mappings.ts`:

| Comando interno | Tipo | Template ID (referencia) | Template Name |
|---|---|---|
| `actualizacion-cyberpanel` | job | 10 | `actualizacion-cyberpanel` |
| `actualizacion-wordpress` | job | 11 | `actualizacion-wordpress` |
| `mantenimiento-preventivo-web` | job | 9 | `mantenimiento-preventivo-web` |
| `revision-maquinas-citrix` | workflow | 17 | `revision-maquinas-citrix` |
| `revision-servidor-agv` | workflow | 22 | `revision-servidor-agv` |

También soporta un modo directo por voz:
- “`plantilla 123`” o “`template id 123`” → intenta lanzar ese ID como job template.

Compatibilidad multi-AWX:
- Si el `templateId` configurado no existe en otra instancia AWX (404), el backend intenta resolver por `templateName` y reintenta el launch con el ID encontrado en esa instancia.
- Recomendación: mantener nombres de templates estables entre entornos (dev/qa/prod).

## Comportamiento importante del launch

- Para `job_templates`: se envían `extra_vars` con metadatos (`source`, `transcript`) y cualquier `extraVars` del mapping.
- Para `workflow_job_templates`: se lanza con payload vacío (`{}`) para evitar rechazos por campos no permitidos.

## Endpoints

### `POST /api/execute`

Entrada: `multipart/form-data` con campo `audio`.

Salida exitosa (ejemplo):

```json
{
	"transcript": "actualizar wordpress",
	"matchedCommand": "actualizacion-wordpress",
	"templateId": 11,
	"templateType": "job",
	"jobId": 1234,
	"awxUrl": "http://awx.../#/jobs/playbook/1234"
}
```

Errores típicos:
- `422`: sin texto o sin comando compatible
- `502`: fallo de conexión a AWX
- `4xx/5xx`: AWX rechazó la ejecución (con detalle de API si existe)

### `GET /api/health-awx`

Verifica:
- Presencia de `AWX_BASE_URL` y `AWX_API_TOKEN`
- Conectividad a `AWX_BASE_URL/api/v2/ping/`
- Estado HTTP y body devuelto por AWX

### `GET /api/health-summary`

Devuelve un resumen de salud del día para el asistente flotante.

Actualmente usa datos mock configurables por variables de entorno y está listo para conectar una fuente real (por ejemplo, integración iOS/HealthKit vía backend).

### `POST /api/health-summary`

Permite actualizar el resumen de salud desde una fuente externa (por ejemplo, un Shortcut en iPhone).

- Autenticación requerida por header:
	- `x-health-ingest-token: <HEALTH_INGEST_TOKEN>`
	- o `Authorization: Bearer <HEALTH_INGEST_TOKEN>`
- Payload JSON (se aceptan campos parciales):

```json
{
	"steps": 8420,
	"restingHeartRate": 61,
	"sleepHours": 7.4,
	"standHours": 10,
	"message": "Resumen desde Apple Health"
}
```

### `GET /api/news`

Obtiene titulares desde Google News RSS por tema (`general`, `politica`, `economia`, `tecnologia`, `deportes`) y devuelve hasta 5 items normalizados.

## UI actual

- Header con logo (`public/logo.png`) a la izquierda.
- Menú hamburguesa con accesos a gestión de usuarios y cierre de sesión.
- Soporte de tema claro/oscuro persistido en `localStorage` (`dashboard-theme`).
- Layout responsive: 2 bloques arriba (control + transcripción) y 1 abajo (resultado).
- En desktop, los dos bloques superiores tienen altura visual equilibrada.
- En móvil, los bloques se apilan en una sola columna.
- Auto-stop por silencio para cerrar grabación sin clic extra.

## Corrección de transcripción

- Antes de ejecutar el matching de comandos se aplican correcciones de términos frecuentes (por ejemplo, variantes de “ansible”).
- Lógica en `src/lib/transcript-corrections.ts`.

## Integración con `whisper-server`

Para audio del navegador (`MediaRecorder`), el backend de Whisper debe aceptar `webm`.

Si usas el servidor incluido en este workspace, verifica que en `whisper-server/app.py` esté habilitada esa extensión.

En la UI de configuración Whisper:
- Ingresa solo URL base (ejemplo: `http://127.0.0.1:5000`).
- No agregues `/transcribe`; la app lo construye automáticamente.
- La prueba de conexión valida primero `GET /health` para evitar falsos negativos.

## Problemas frecuentes

### 1) `npm run dev` en carpeta incorrecta (`ENOENT package.json`)

Ejecuta desde:

```bash
cd "Dashboard Ansible IA/dashboard-ansible-ia"
npm run dev
```

### 2) “Unable to acquire lock ... .next/dev/lock”

Ya hay otra instancia de Next.js corriendo. Cierra la anterior o mata el proceso y vuelve a iniciar.

Si ocurre en build (`.next/lock`), elimina el lock y relanza:

```bash
rm -f .next/lock
npm run build
```

### 3) Errores 502 al ejecutar

Revisa:
- `AWX_BASE_URL` con protocolo correcto
- Acceso de red al host/puerto AWX
- Token vigente
- Estado de `GET /api/health-awx`

### 4) Errores 400 de AWX

Normalmente es rechazo de payload o permisos del token. En esta app, workflows ya se lanzan sin `extra_vars`; revisa detalle exacto devuelto por AWX en la respuesta de error.

### 5) `AWX rechazó la ejecución del template (HTTP 404)`

Suele ocurrir al cambiar de instancia AWX con IDs diferentes.

Revisa:
- Que exista el template/workflow con el mismo `templateName` en la nueva instancia.
- Que el token tenga permisos sobre ese recurso.
- Que el tipo coincida (`job` vs `workflow`).

La app ya incluye fallback por nombre cuando el ID no existe.
