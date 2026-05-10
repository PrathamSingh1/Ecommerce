const express = require("express");
const userController = require("../controllers/user.controller");
const { isAuthenticated } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", isAuthenticated, userController.userProfile);

module.exports = router;
