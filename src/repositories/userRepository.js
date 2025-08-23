const User = require("../schema/userSchema.js");

class UserRepository {
  async findUser(parameters) {
    const response = await User.findOne({ ...parameters });
    return response;
  }
}

module.exports = UserRepository;
