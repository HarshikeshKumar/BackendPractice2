const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig.js");
const UnAuthorisedError = require("../utils/unauthorisedError.js");

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
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded) {
      throw new UnAuthorisedError();
    }
    // If reached here, then user is authenticated allow them to access the api
    req.user = {
      email: decoded.email,
      id: decoded.id,
      role: decoded.role,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      data: {},
      error: error,
      message: "Invalid token provided",
    });
  }
}

// This function checks if the authenticated user is an admin or not
// Because we will call isAdmin after isLoggedIn thats why we will recieve user detils
function isAdmin(req, res, next) {
  const loggedInUser = req.user;
  if (loggedInUser.role === "ADMIN") {
    next();
  } else {
    return res.status(401).json({
      success: false,
      data: {},
      message: "You are not authorized for this action",
      error: {
        statusCode: 401,
        reason: "Unauthorized user for this action",
      },
    });
  }
}

module.exports = {
  isLoggedIn,
  isAdmin,
};
