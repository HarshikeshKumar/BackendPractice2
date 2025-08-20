const mongoose = require("mongoose");
const ServerConfig = require("./serverConfig.js");

async function connectDB() {
  try {
    await mongoose.connect(ServerConfig.DB_URL);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log("Not able to connect MongoDB");
    console.log(error);
  }
}

module.exports = connectDB;
