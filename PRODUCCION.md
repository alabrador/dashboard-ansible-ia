# Despliegue a Producción (Linux + systemd + Nginx)

Este runbook deja el sistema persistente tras reinicio:

- Frontend/API Next.js (`dashboard-ansible-ia`)
- `whisper-server` local en `127.0.0.1:5000`
- Reverse proxy Nginx con dominio público y TLS

## 1) Preparar `whisper-server`

```bash
cd /home/alabrador/ansible/whisper-server
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

Prueba local:

```bash
.venv/bin/gunicorn --workers 1 --threads 4 --timeout 180 --bind 127.0.0.1:5000 wsgi:app
```

Verifica:

```bash
curl -s http://127.0.0.1:5000/health
```

## 2) Preparar Next.js

```bash
cd "/home/alabrador/ansible/Dashboard Ansible IA/dashboard-ansible-ia"
npm ci
npm run build
```

Verifica variables en `.env.local`:

- `WHISPER_SERVER_URL=http://127.0.0.1:5000`
- `AWX_BASE_URL=http://<host-awx>:10445` (o `https://...` según tu caso)
- `AWX_API_TOKEN=<token>`

Prueba local:

```bash
npm run start:prod
```

## 3) Instalar servicios `systemd`

### Whisper

```bash
sudo cp /home/alabrador/ansible/whisper-server/deploy/systemd/whisper-server.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now whisper-server
sudo systemctl status whisper-server --no-pager
```

### Dashboard

```bash
sudo cp "/home/alabrador/ansible/Dashboard Ansible IA/dashboard-ansible-ia/deploy/systemd/dashboard-ansible-ia.service" /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now dashboard-ansible-ia
sudo systemctl status dashboard-ansible-ia --no-pager
```

Logs en vivo:

```bash
sudo journalctl -u whisper-server -f
sudo journalctl -u dashboard-ansible-ia -f
```

## 4) Publicar con Nginx

1. Copia la plantilla:

```bash
sudo cp "/home/alabrador/ansible/Dashboard Ansible IA/dashboard-ansible-ia/deploy/nginx/dashboard-ansible-ia.conf" /etc/nginx/conf.d/
```

2. Cambia `server_name` al dominio real.

3. Valida y recarga:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 5) Activar HTTPS (Let's Encrypt)

Con `certbot` (ejemplo para Nginx):

```bash
sudo certbot --nginx -d dashboard-ansible-ia.tu-dominio.com
```

## 6) Smoke tests de producción

```bash
curl -s http://127.0.0.1:5000/health
curl -s http://127.0.0.1:3000/api/health-awx
curl -I https://dashboard-ansible-ia.tu-dominio.com
```

En UI:
- Graba una orden válida
- Verifica transcripción
- Verifica `jobId` y enlace AWX

## Actualización de versión

```bash
cd "/home/alabrador/ansible/Dashboard Ansible IA/dashboard-ansible-ia"
git pull
npm ci
npm run build
sudo systemctl restart dashboard-ansible-ia
```

Si cambiaste `whisper-server`:

```bash
cd /home/alabrador/ansible/whisper-server
source .venv/bin/activate
pip install -r requirements.txt
sudo systemctl restart whisper-server
```

## Rollback rápido

```bash
sudo systemctl restart whisper-server
sudo systemctl restart dashboard-ansible-ia
```

Si el problema fue de deploy reciente, vuelve al commit anterior y repite `npm run build` + restart.
