# n8n Workflows

Colección de automatizaciones creadas con n8n para practicar integraciones, agentes de IA, scraping y manejo de datos.

## Mejores proyectos

Esta es mi selección por utilidad, nivel de integración y valor como proyecto de aprendizaje:

1. [RAG System](./o10-rag-system): ingesta documentos desde Google Drive y responde con contexto almacenado en PostgreSQL y PGVector. Es el proyecto más completo de la colección.
2. [Personal Assistant](./o8-personal-assistant): agente conectado a Gmail y Google Calendar mediante MCP.
3. [Telegram Bot](./o12-telegram-bot): bot multimodal que procesa texto, imágenes y audio con modelos de IA.
4. [WhatsApp Bot](./o13-whatsapp-bot): asistente conversacional para WhatsApp con memoria y procesamiento de mensajes.
5. [My Store Agent](./o9-my-store-agent): consulta órdenes, valida clientes, actualiza direcciones y escala casos por correo.
6. [Vacation Request](./o4-vacation-request): automatiza solicitudes y aprobaciones con Calendar, Gmail, Discord y PostgreSQL.
7. [Error Handling](./o14-log-error-handling): centraliza errores de workflows críticos y guarda sus registros en PostgreSQL.

## Uso

1. Abre n8n.
2. Importa el archivo `.json` del workflow que quieras probar.
3. Configura las credenciales y variables requeridas por sus nodos.
4. Ejecuta el flujo manualmente o activa su trigger.

> Algunos workflows necesitan servicios externos o credenciales propias antes de ejecutarse.
