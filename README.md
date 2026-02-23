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
----------------------------------------------------------------------------------------------------------
🛠 Tech Stack

Backend
   .Node.js
   .Express.js

Database
  .MongoDB
  .Mongoose

Security
   .JWT (jsonwebtoken)
   .bcrypt
   .HTTP-only Cookies

Utilities
  .cookie-parser
  .dotenv
-------------------------------------------------------------------------------------------------------------------
📁 Folder Structure
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

-----------------------------------------------------------------------
🔄 Authentication Workflow

User Register
→ Password Hashed (bcrypt)
→ User Stored in DB

User Login
→ Password Verified
→ JWT Generated

JWT
→ Stored in HTTP-only Cookie

Protected Routes
→ Middleware Verifies JWT
→ Access Granted

---------------------------------------------------------------------------------------------------------
🔒 Authentication Middleware

           const jwt = require("jsonwebtoken");

         const authMiddleware = (req, res, next) => {
        try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.userId = decoded.id;

    next();
    } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
    }
    };

     module.exports = authMiddleware;


