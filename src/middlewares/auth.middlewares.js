const jwt = require("jsonwebtoken");

exports.authMiddlewares = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);

    // Attach user info to requset

    req.userId = decoded.id;

    next(); // allow request to continue
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }

};
