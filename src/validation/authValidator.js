const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig.js");

async function isLoggedIn(req, res, next) {
  const token = req.cookies["authToken"];

  // Agar token nhi mila
  if (!token) {
    return res.status(401).json({
      success: false,
      data: {},
      error: "Not authenticated",
      message: "No auth token provided",
    });
  }

  // Agar token mila hai
  const decoded = jwt.verify(token, JWT_SECRET);
  // Agar token ko decode nhi krr pa raha that means wrong token
  if (!decoded) {
    return res.status(401).json({
      success: false,
      data: {},
      error: "Not authenticated",
      message: "Invalid token provided",
    });
  }

  // If reached here, then user is authenticated allow them to access the api
  req.user = {
    email: decoded.email,
    id: decoded.id,
  };

  next();
}

module.exports = {
  isLoggedIn,
};
