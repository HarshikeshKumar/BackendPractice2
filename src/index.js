const express = require("express");

const ServerConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");
// const User = require("./schema/userSchema.js");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.post("ping", (req, res) => {
  console.log(req.body);
  return res.json({
    message: "Pong",
  });
});

app.listen(ServerConfig.PORT, async () => {
  await connectDB();
  console.log(`Server listening at port: ${ServerConfig.PORT}`);

  /*
  const newUser = await User.create({
    firstName: "Gaurav",
    lastName: "Singh",
    mobileNumber: "1234567898",
    email: "gaurav@gmail.com",
    password: "123456",
  });

  console.log("New User successfully created");
  console.log(newUser);
  */
});
