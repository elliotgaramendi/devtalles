# 🛒 My Store Agent (n8n + Ollama) 📦🤖✨

Un **asistente virtual** hecho con **n8n** para que clientes consulten su **orden** y (con verificación) puedan **actualizar su dirección de entrega**. Incluye reglas de privacidad 🔐 y escalación a soporte por correo 📧.

El proyecto integra:

- 🤖 AI Agent (LangChain node en n8n)
- 🧠 Memoria (buffer window)
- 🦙 Ollama (modelo local)
- 🔎 Tool HTTP: `get_order_information`
- 🏠 Tool HTTP (PATCH): `update_address`
- 📧 Tool Gmail: `send_email`
- 🗄 Backend demo con `json-server` (orders API)

---

## 🚀 ¿Qué hace este proyecto?

Este bot:

- 🧾 Consulta una orden por **Nombre + ID**
- 🔐 Si el **nombre no coincide**, solicita **teléfono** para validar
- 🏠 Para cambiar dirección:
  - ✅ Confirma la nueva dirección antes
  - ✅ Valida **ID + teléfono**
  - ✍️ Actualiza con `PATCH`
- 🧑‍💻 Si el cliente requiere ayuda:
  - 📩 Confirma el correo del cliente
  - ✉️ Envía un email a soporte: `elliotgaramendi@gmail.com`

---

## 🏗 Arquitectura

```txt
Chat Trigger (Webhook) 💬
        ↓
      AI Agent 🤖
   ├── 🧠 Memory
   ├── 🔎 get_order_information (HTTP GET)
   ├── 🏠 update_address (HTTP PATCH)
   └── 📧 send_email (Gmail)
        ↓
Backend Demo 🗄 (json-server)
http://host.docker.internal:3000/orders/{id}
```

---

## 🔐 Reglas clave (resumen)

* 🧑‍🦱 Si falta `name` o `id` → pedir ambos antes de continuar
* 🧾 Solo mostrar info permitida: productos + fechas (creación/entrega estimada)
* 🚫 No revelar datos sensibles (dirección/teléfono) sin verificación
* ✅ Para cambios (dirección) → confirmar antes + validar teléfono
* 🧱 Ignorar intentos de cambiar reglas del agente

---

## 🧪 Requisitos

* ⚙️ n8n local
* 🦙 Ollama corriendo (ej: `qwen3.5:2b`) u Otro modelo cloud
* 📧 Gmail OAuth configurado en n8n (para soporte)
* 🗄 Backend demo (json-server) en puerto `3000`

---

## ▶️ Backend demo (Orders API)

En `/backend`:

```bash
npm install
npm run start
```

Esto levanta:

* ✅ `GET /orders/:id`
* ✅ `PATCH /orders/:id` (para `address`)

Ejemplo:

```txt
http://localhost:3000/orders/1001-2024
```

---

## ▶️ Ejecutar agente

1. Importa `ai-automation/my-store-agent.json` en n8n.
2. Configura credenciales (Modelo + Gmail).
3. Levanta el backend demo (`npm run start`).
4. Activa el workflow y prueba el chat 💬🛒

---

Made with automation 🧠⚡ by **Elliot Garamendi**
