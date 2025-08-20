const express = require("express");
const ServerConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");
const app = express();

app.listen(ServerConfig.PORT, async () => {
  await connectDB();
  console.log(`Server listening at port: ${ServerConfig.PORT}`);
});
