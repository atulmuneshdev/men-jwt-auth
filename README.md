🔐 MERN Auth & Posts API

A secure backend REST API built with Node.js, Express, and MongoDB, implementing JWT authentication, HTTP-only cookies, protected routes, and user-specific post management.

This project demonstrates real-world authentication and authorization patterns used in MERN applications.

🚀 Features

✅ User Registration & Login

🔐 JWT Authentication

🍪 HTTP-only Cookie-based Auth

🛡 Protected Routes using Middleware

📝 Create Posts (Authenticated Users Only)

👤 User ↔ Post Relationship (MongoDB References)

⛔ Authorization (Only owner can update/delete)

📦 Clean MVC Folder Structure

🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Authentication: JWT, bcrypt

Cookies: cookie-parser

Environment: dotenv

📁 Project Structure
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
│   └── post.routes.js
│
├── config/
│   └── db.js
│
├── .env
├── .gitignore
├── app.js
├── server.js
└── package.json
⚙️ Environment Variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_TOKEN=your_secret_key
🔄 Authentication Flow
Register → Hash Password → Save User
Login → Verify Password → Generate JWT
JWT → Stored in HTTP-only Cookie
Protected Routes → Middleware Verifies JWT
🔒 Auth Middleware Example
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
🧩 MongoDB Relationships
user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
}

Each post belongs to a specific user, enabling secure authorization checks.

🔐 Security Practices Used

HTTP-only cookies (XSS protection)

Password hashing using bcrypt

JWT expiration handling

Middleware-based route protection

No sensitive data returned in responses

🧪 API Testing

You can test this API using:

Postman

Thunder Client

REST Client (VS Code)

⚠️ Enable cookies while testing protected routes.

📌 Use Cases

MERN authentication boilerplate

Secure backend for React apps

Learning JWT + Cookie-based auth
