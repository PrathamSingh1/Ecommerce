const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

// middleware
const userMiddleware = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await userModel.findById(decoded.user.id).select("-password");
      next();
    } catch (error) {
      console.log("Token verification failed", error);
      res.status(401).json({
        message: "Not authorized , token failed",
      });
    }
  } else {
    res.status(401).json({
      message: "Not authorized, no token provided",
    });
  }
};

const adminMiddleware = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({
      message: "Not authorized as an admin",
    });
  }
};

module.exports = { userMiddleware, adminMiddleware };
