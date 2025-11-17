# [🚀 Push Notifications Backend (NestJS)](https://github.com/elliotgaramendi/devtalles/tree/develop/react-native-expo/o8-push-app-back)
A lightweight and production-ready **backend service for sending push notifications** using **NestJS** and **Expo Server SDK** ⚡️.
Designed to work seamlessly with the *Push App* built in React Native + Expo, this backend exposes a clean API endpoint to deliver real-time push messages to any device registered with Expo.

---

## ✨ Features

* 📡 **Send Push Notifications**: Simple REST endpoint to trigger messages
* 🔐 **Token Validation**: Verifies that incoming tokens are valid Expo push tokens
* 📦 **Chunked Delivery**: Automatically splits notifications into chunks using Expo SDK
* 🧱 **Modular Architecture**: Built following NestJS best practices
* ⚙️ **Environment-Ready**: Supports `.env` variables (port, Expo Access Token, etc.)
* 📊 **Response Tickets**: Returns Expo ticket receipts per chunk
* 🤖 **FCM v1 Enabled**: Modern push router through Firebase Cloud Messaging

---

## 🛠️ Tech Stack

* 🧱 **NestJS** – Modular Node.js framework
* 🔔 **Expo Server SDK** – Trigger push notifications
* 🔥 **FCM v1** – Modern notification pipeline
* 🟦 **TypeScript** – Types everywhere
* 🧪 **Jest** – Testing suite included by Nest

---

## 📡 API Endpoint

### **POST /api/send-notification**

Sends a notification to one or multiple Expo tokens.

#### **Request Body**

```json
{
  "to": ["ExponentPushToken[xxxxxxxxxxxxxx]"]
}
```

---

## 🚀 Getting Started

1. **Clone repository**

```bash
git clone <your-repo-url>
cd react-native-expo/o8-push-app-back
```

2. **Install dependencies**

```bash
npm install
```

3. **Set environment variables (optional)**
   Create `.env`:

```
PORT=3000
EXPO_ACCESS_TOKEN=<your-token>   # Optional if needed
```

4. **Start development server**

```bash
npm run start:dev
```

---

## 🎯 Key Components

### 🔔 **PushNotificationService**

Handles building and sending all Expo push notifications.

### 📡 **AppController**

Exposes REST API for sending notifications.

### 🧱 **NestJS Modules**

Organized and scalable structure.

---

## 🤝 Contributing

Contributions are welcome!
Improvements, extensions (Firebase integration, message customization, logs, etc.), and PRs are encouraged.

1. Fork the repository 🍴
2. Create a new branch 🌿
3. Commit your changes 💾
4. Push 🚀
5. Open a Pull Request 📮

---

## 📄 License

This project is open source under the MIT License.

---

**Built with ♥️ using NestJS + Expo Push API**
