const express = require("express");
const { createUser } = require("../controllers/userController.js");

// We have to initialize a router object to add routes in a new file.
// Routers are used for segregating your routes in different modules.
const userRouter = express.Router();

userRouter.post("/", createUser); // this is a route registration

module.exports = userRouter; // export the router
