# 🧑‍💼 Personal Assistant (n8n + MCP + Gmail + Calendar) 📧📅✨

Un asistente construido con **n8n** que te ayuda a administrar **correo** y **calendario** con reglas de productividad: respuestas cortas, sin traslapes, horario laboral y confirmación antes de ejecutar acciones ✅

El proyecto integra:

- 🤖 AI Agent (LangChain node en n8n)
- 🧠 Memoria de conversación (buffer window)
- 🦙 Ollama (local) / 🌟 Gemini (opcional)
- 🧩 MCP Clients: Gmail + Calendar
- 🧰 Tool extra: Pokémon Finder (demo de tool/workflow)

---

## 🚀 ¿Qué hace este proyecto?

Este asistente:

- 💬 Recibe mensajes por webhook (Chat Trigger)
- 🗓 Gestiona calendario con reglas:
  - 🕗 Horario laboral 8am–4pm (L–V)
  - 🚫 No fines de semana / no fuera de horario
  - 🧱 Sin traslapes (verifica disponibilidad)
  - ✅ Siempre confirma antes de crear/modificar/cancelar
  - ⏰ Recordatorios 15 min antes
  - 🧾 Resumen diario + resumen semanal (lunes temprano)
- 📧 Gestiona correo con reglas:
  - 🧾 Lectura en texto plano (sin HTML)
  - 📝 Antes de enviar: crea **borrador HTML** y pide confirmación
  - 🔥 Prioriza: Alta > Media > Baja
  - 🧹 Ignora spam/promos/notificaciones irrelevantes
  - ✅ Confirma antes de archivar/eliminar
  - ⚡ Propone respuestas rápidas para alta prioridad
  - ✍️ Firma fija: **Elliot Garamendi**

---

## 🏗 Arquitectura

```txt
Chat UI / Trigger (Webhook)
          ↓
       AI Agent 🤖
   ├── 🧠 Memory (Buffer Window)
   ├── 🦙 Ollama (local) / 🌟 Gemini (opcional)
   ├── 🧩 MCP Gmail Client → (draft / read / send / mark unread)
   ├── 🧩 MCP Calendar Client → (get / create / delete / list)
   └── 🧰 Tool Workflow: Pokemon Finder (demo)
```

---

## 🧪 Requisitos

* ⚙️ n8n corriendo localmente
* 🧩 MCP endpoints activos (Gmail + Calendar)
* 🔐 Credenciales OAuth configuradas (Google)
* 🦙 Ollama (opcional) con un modelo descargado (ej: `qwen3.5:2b`)
* 🌟 Gemini (opcional) configurado en n8n

---

## ▶️ Ejecutar

1. Importa `personal-assistant.json` en n8n.
2. Importa/activa los servidores MCP:

   * `mcps/gmail-mcp.server.json`
   * `mcps/calendar-mcp-server.json`
3. Activa el workflow del asistente (**Personal Assistant**).
4. Abre el chat (o usa tu UI) y conversa 📩

---

## 🧰 Tools incluidos

* 🧩 **MCP Gmail**: leer / crear borrador / enviar / marcar no leído
* 🧩 **MCP Calendar**: listar / crear / obtener / eliminar eventos
* 🧰 **Pokemon Finder Tool**: ejemplo de tool vía workflow (PokeAPI)

---

Made with focus 🧠⚡ by **Elliot Garamendi**
