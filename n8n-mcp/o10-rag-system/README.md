# 🧠 RAG System (n8n + PGVector + Gemini) 📚⚡

Sistema completo de **RAG (Retrieval-Augmented Generation)** construido en **n8n**, capaz de:

- 📥 Ingestar documentos automáticamente (Google Drive)
- 🧠 Generar embeddings
- 🗄 Guardar en base vectorial (Postgres + PGVector)
- 💬 Responder preguntas usando SOLO el contexto recuperado

Workflow incluido: :contentReference[oaicite:0]{index=0}

---

## 🚀 ¿Qué hace este proyecto?

Este sistema:

- 📂 Detecta documentos en Google Drive
- 🔄 Evita duplicados usando `md5Checksum`
- ✂️ Divide texto en chunks (600 / overlap 100)
- 🧠 Genera embeddings (Gemini)
- 🗄 Guarda vectores en Postgres (PGVector)
- 🔎 Recupera contexto relevante
- 🤖 Responde con un agente (RAG)

---

## 🏗 Arquitectura

```txt
📥 Ingesta de documentos
Google Drive 📂
        ↓
Validación (md5 / duplicados)
        ↓
✂️ Text Splitter
        ↓
🧠 Embeddings (Gemini)
        ↓
🗄 PGVector (Postgres)
        ↓

💬 Consumo (RAG)
Chat Trigger
        ↓
🔎 Vector Store (retriever)
        ↓
🤖 AI Agent (solo contexto)
        ↓
📖 Respuesta con fuente
````

---

## ⚖️ Comportamiento del agente

El agente está diseñado como **asistente legal**, con reglas estrictas:

* 📌 Responde SOLO con información del RAG
* 🚫 No usa conocimiento externo
* 📖 Siempre incluye fuente (ej: *Artículo X*)
* ❌ Si no encuentra info:

```txt
No puedo encontrar la respuesta en los recursos disponibles.
```

---

## 🧪 Requisitos

* ⚙️ n8n local
* 🗄 Postgres con extensión **PGVector**
* 📂 Google Drive conectado (documentos fuente)
* 🌟 Gemini API (chat + embeddings)

---

## ▶️ Flujo de ingesta

Automático o manual:

* 🖱 Manual: "Execute workflow"
* ⏱ Programado: Schedule Trigger
* 📂 Fuente: carpeta en Google Drive

Incluye:

* 🔍 Verificación de duplicados
* 🧹 Eliminación de versiones antiguas
* 📝 Registro en `ingested_files`
* 🔗 Relación entre vectores y archivos

---

## ▶️ Flujo de consulta (RAG)

1. Usuario hace pregunta 💬
2. Se consulta el vector store 🔎
3. Se obtiene contexto relevante 📄
4. El agente responde SOLO con ese contexto 🤖

---

## 🧠 Stack

* n8n (orquestación)
* Google Gemini (LLM + embeddings)
* Postgres + PGVector (vector DB)
* Google Drive (fuente de documentos)

---

## 🔮 ¿Para qué sirve?

* ⚖️ Asistentes legales (como este caso)
* 🏛 Gobierno / normativa (MTC 👀)
* 📚 Bases documentales internas
* 🤖 Chatbots con conocimiento controlado

---

Made with RAG power 🧠⚡ by **Elliot Garamendi**
