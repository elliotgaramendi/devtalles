# 🧠 Wiki Agent (n8n + model) 📚✨

Un chatbot construido con **n8n** que actúa como asistente de Wikipedia usando un agente con herramientas (tools), memoria y modelo LLM configurable.

El proyecto integra:

- 🤖 AI Agent (LangChain node en n8n)
- 📚 Tool de Wikipedia
- 🧠 Memoria de conversación (buffer window)
- 🦙 Ollama como modelo local (configurable a modelo de cloud)
- 💬 UI Web usando `@n8n/chat`

---

## 🚀 ¿Qué hace este proyecto?

Este bot:

- 📩 Recibe mensajes desde un webhook público de n8n
- 🧠 Usa un AI Agent con reglas definidas
- 🔎 Consulta Wikipedia como herramienta externa
- ✍️ Responde en máximo dos párrafos
- 📖 Incluye referencias del artículo consultado
- 🗂 Mantiene memoria corta de conversación

El flujo exportado del workflow está incluido en:

```
wiki-agent.json
```

---

## 🏗 Arquitectura

```
Frontend (HTML - @n8n/chat)
↓
Webhook Chat Trigger
↓
AI Agent
├── 📚 Wikipedia Tool
├── 🧠 Memory (Buffer Window)
└── 🦙 Ollama / Gemini / OpenAI
```

---

## 🧪 Requisitos

- ⚙️ n8n corriendo localmente
- 🦙 Ollama instalado
- 📦 Modelo descargado (`lfm2.5-thinking:latest` o `gemma3:1b`)
- 🟢 Node 18+ (opcional para servir el HTML)

---

## ▶️ Ejecutar

1. Importa `wiki-agent.json` en n8n.
2. Activa el workflow.
3. Verifica que Ollama esté corriendo:

```bash
ollama serve
```

4. Abre el HTML del chatbot.
5. Conversa con Ana 🤖

---

Made with curiosity 🧠 by **Elliot Garamendi**
