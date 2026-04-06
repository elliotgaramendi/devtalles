# Voice Agent - Store Assistant

Proyecto de automatización con n8n para una tienda, con un workflow que expone endpoints HTTP para consultar:
- productos
- órdenes por `orderId`

## Estructura

- `ai-automation/store-assistant.json`: workflow de n8n
- `backend/`: API mock local con `json-server` (puerto `3000`)
- `api-requests.http`: requests de prueba

## Cómo correrlo

### 1) Levantar backend mock

```bash
cd backend
npm install
npm start
```

Backend disponible en: `http://localhost:3000`

### 2) Levantar n8n

Ejecuta n8n como normalmente lo usas (local o Docker).

Si usas Docker, el workflow consulta el backend con:
- `http://host.docker.internal:3000/products`
- `http://host.docker.internal:3000/orders/:id`

### 3) Importar workflow

En n8n:
1. Importa `ai-automation/store-assistant.json`
2. Configura la credencial de Header Auth (`x-auth`)
3. Activa el workflow (o usa URL de test)

### 4) Probar endpoints

Usa `api-requests.http` con REST Client y define:
- `@baseUrl` (ejemplo: `http://localhost:5678`)
- `@xAuth` (valor del header configurado en n8n)

Endpoints:
- `GET /webhook/my-store/products`
- `POST /webhook/my-store/orders`
