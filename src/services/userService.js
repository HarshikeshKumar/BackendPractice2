const { findUser, createUser } = require("../repositories/userRepository.js");
const { createcart } = require("../repositories/cartRepository.js");

async function registerUser(userDetails) {
  // console.log("Hitting Service layer");
  // It will create a brand new user in the db

  // 1. We need to check if the user with this email and mobile number already exists or not
  const user = await findUser({
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
  const newUser = await createUser({
    email: userDetails.email,
    password: userDetails.password,
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    mobileNumber: userDetails.mobileNumber,
  });

  // Agar User create nhi hua toh
  if (!newUser) {
    throw {
      reason: "Something went wrong, cannot create user",
      statusCode: 500,
    };
  }

  await createcart(newUser._id);

  // 3. return the detail of created user
  return newUser;
}

module.exports = {
  registerUser,
};
