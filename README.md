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
- STT local: `whisper-server` en `http://127.0.0.1:5000`.
- Orquestación remota: AWX API v2 con token Bearer.

## Requisitos

- Node.js 20+
- `whisper-server` levantado en `WHISPER_SERVER_URL`
- AWX accesible desde esta máquina
- Token AWX con permisos para lanzar templates/workflows

## Variables de entorno

1. Copia:

```bash
cp .env.example .env.local
```

2. Ajusta valores en `.env.local`:

```dotenv
WHISPER_SERVER_URL=http://127.0.0.1:5000
AWX_BASE_URL=http://<host-awx>:10445
AWX_API_TOKEN=<tu_token>
```

Notas:
- `AWX_BASE_URL` debe usar el protocolo real configurado en tu instancia (`http` o `https`).
- El backend elimina slash final automáticamente.

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

| Comando interno | Tipo | Template ID |
|---|---|---|
| `actualizacion-cyberpanel` | job | 10 |
| `actualizacion-wordpress` | job | 11 |
| `mantenimiento-preventivo-web` | job | 9 |
| `revision-maquinas-citrix` | workflow | 17 |
| `revision-servidor-agv` | workflow | 22 |

También soporta un modo directo por voz:
- “`plantilla 123`” o “`template id 123`” → intenta lanzar ese ID como job template.

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

## UI actual

- Layout responsive: 2 bloques arriba (control + transcripción) y 1 abajo (resultado).
- En desktop, los dos bloques superiores tienen altura visual equilibrada.
- En móvil, los bloques se apilan en una sola columna.
- Auto-stop por silencio para cerrar grabación sin clic extra.

## Integración con `whisper-server`

Para audio del navegador (`MediaRecorder`), el backend de Whisper debe aceptar `webm`.

Si usas el servidor incluido en este workspace, verifica que en `whisper-server/app.py` esté habilitada esa extensión.

## Problemas frecuentes

### 1) `npm run dev` en carpeta incorrecta (`ENOENT package.json`)

Ejecuta desde:

```bash
cd "Dashboard Ansible IA/dashboard-ansible-ia"
npm run dev
```

### 2) “Unable to acquire lock ... .next/dev/lock”

Ya hay otra instancia de Next.js corriendo. Cierra la anterior o mata el proceso y vuelve a iniciar.

### 3) Errores 502 al ejecutar

Revisa:
- `AWX_BASE_URL` con protocolo correcto
- Acceso de red al host/puerto AWX
- Token vigente
- Estado de `GET /api/health-awx`

### 4) Errores 400 de AWX

Normalmente es rechazo de payload o permisos del token. En esta app, workflows ya se lanzan sin `extra_vars`; revisa detalle exacto devuelto por AWX en la respuesta de error.
