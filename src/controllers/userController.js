const UserRepository = require("../repositories/userRepository.js");
const UserService = require("../services/userService.js");

function createUser(req, res) {
  console.log("User Controller called");
  console.log(req.body);

  // TODO: Register the User Logic

  const userService = new UserService(new UserRepository());

  return res.json({
    message: "OK",
  });
}

module.exports = {
  createUser,
};
