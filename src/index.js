const express = require("express");
const cookieParser = require("cookie-parser");

const ServerConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");
const userRouter = require("./routes/userRoute.js");
const cartRouter = require("./routes/cartRoute.js");
const { authRouter } = require("./routes/authRoute.js");
const { isLoggedIn } = require("./validation/authValidator.js");
const uploader = require("./middlewares/multerMiddleware.js");
// const User = require("./schema/userSchema.js");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Routing middleware
// if your req route starts with /users then handle it using userRouter
app.use("/users", userRouter); // connects the router to the server

app.use("/carts", cartRouter);
app.use("/auth", authRouter);

app.post("/photo", uploader.single("incomingFile"), (req, res) => {
  console.log(req.file); // uploade file object
  return res.json({
    message: "OK",
  });
});

app.get("/ping", isLoggedIn, (req, res) => {
  // controller
  console.log(req.body);
  // console.log(req.cookies);
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
