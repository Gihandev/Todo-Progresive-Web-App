# Progressive Web App (PWA) Todo (MERN Stack)

A research-focused **Todo Application** built to demonstrate **Progressive Web App (PWA)** capabilities using **Vite + React** and the **MERN Stack**.  
This app functions like a native mobile application: it is **installable**, works **offline**, and offers a seamless user experience regardless of network conditions.

<!-- REPLACE WITH A SCREENSHOT SHOWING THE "ADD TO HOME SCREEN" PROMPT OR UI -->
<img width="925" height="647" alt="image" src="https://github.com/user-attachments/assets/1f1a64d1-e06e-4b75-bf82-8f867475c195" />


---

## 🚀 Features
- 📲 **Installable**: Supports **Add to Home Screen (A2HS)** on mobile and desktop.
- 📶 **Offline Support**: Service Workers cache assets, allowing the app to load without internet.
- 📝 **Task Management**: Full **CRUD** operations for daily tasks.
- 🔔 **Interactive Feedback**: Real-time notifications using **React Toast**.
- ⚡ **Optimized Performance**: Built with **Vite** for rapid build times and lightweight bundle size.

---

## 🛠 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React (Vite), Tailwind CSS, PWA (Service Workers/Manifest), React Toast |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |

---

## 📦 Setup Guide

### 1. Clone Repository
```bash
git clone https://github.com/Gihandev/YOUR-REPO-NAME.git


```

### 2. Backend Setup
```bash
cd server
npm install

Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET =""

```

### 3. Run Development Server
```bash
npm start
```

### 4. Frontend Setup
```bash
cd ../client
npm install

Start the application:
npm run dev
```


## 🎥 Demo
Live App - https://pwa-todo-frontend.vercel.app/

---

## ⚠️ Notes & Trade-offs
- Service Workers: Caching strategies are implemented to handle offline requests; updates to the app may require a page refresh to clear old caches.
- HTTPS: PWA features (like Service Workers) require HTTPS to function (except on localhost).
- Research Focus: This project explores the bridge between web and native mobile experiences.

## 👨‍💻 Author

Gihan Serasinghe

- Portfolio: https://gihandev.vercel.app/
- GitHub: https://github.com/Gihandev


If you like this project, please give it a ⭐!
