const User = require("../schema/userSchema.js");

class userRepository {
  async findUser(parameters) {
    const response = await User.findOne({ ...parameters });
    return response;
  }
}

module.exports = userRepository;
