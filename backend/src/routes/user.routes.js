const express = require("express");
const userController = require("../controllers/user.controller");
const { userMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", userMiddleware, userController.userProfile);

module.exports = router;
