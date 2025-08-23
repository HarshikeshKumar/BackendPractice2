class UserService {
  constructor(_userRepository) {
    // In the argument we will expect userRepository argument
    this.userRepository = _userRepository;
  }

  async registerUser(userDetails) {
    // It will create a brand new user in the db

    // 1. We need to check if the user with this email and mobile number already exists or not
    const user = await this.userRepository.findUser({
      email: userDetails.email,
      mobileNumber: userDetails.mobileNumber,
    });

    if (user) {
      // If we found a user
      throw {
        reason: "User with the given email and mobile number is already exists",
        statusCode: 400,
      };
    }
    // 2. If not then create the user in the database
    // 3. return the detail of created user
  }
}

module.exports = UserService;
