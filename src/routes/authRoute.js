const express = require("express");
const { login } = require("../controllers/authController.js");

const authRouter = express.Router();

authRouter.post("/", login);

module.exports = { authRouter };
