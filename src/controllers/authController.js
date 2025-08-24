const { loginUser } = require("../services/authService.js");

async function login(req, res) {
  try {
    const loginPayload = req.body;
    // call authService
    const response = await loginUser(loginPayload);

    return res.status(200).json({
      success: true,
      message: "Loged in successfully",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      success: false,
      data: {},
      message: error.message,
      error: error,
    });
  }
}

module.exports = {
  login,
};
