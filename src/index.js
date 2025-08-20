const express = require("express");

const ServerConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.listen(ServerConfig.PORT, async () => {
  await connectDB();
  console.log(`Server listening at port: ${ServerConfig.PORT}`);
});
