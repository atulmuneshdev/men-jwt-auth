🔐 MERN Auth & Posts API

A secure backend REST API built with Node.js, Express, and MongoDB, implementing JWT authentication, HTTP-only cookies, protected routes, and user-specific post management.

This project demonstrates real-world authentication and authorization patterns used in MERN applications.

------------------------------------------------------------------------------------------------------------------------------------------------------------------
🚀 Key Features

✅ User Signup & Login

🔐 JWT Authentication

🍪 HTTP-only Cookie Storage

🛡 Route Protection via Middleware

📝 Post Creation (Auth Users Only)

👤 User–Post Relationship (MongoDB Ref)

⛔ Authorization (Owner-only Update/Delete)

📦 Scalable MVC Architecture
-------------------------------------------------------------------------------------------------------------------
mern-auth-posts/
│
├── controllers/
│   ├── auth.controller.js
│   └── post.controller.js
│
├── middlewares/
│   └── auth.middleware.js
│
├── models/
│   ├── user.model.js
│   └── post.model.js
│
├── routes/
│   ├── auth.routes.js
│  
│
├── config/
│   └── db.js
│
├── .env
├── .gitignore
├── app.js
├── server.js
└── package.json


