const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minlength: [5, "First Name must be atleast 5 character long"],
    lowercase: true,
    trim: true,
    maxlength: [20, "First Name should be less than or equal to 20 character"],
  },

  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    minlength: [5, "Last Name must be atleast 5 character long"],
    lowercase: true,
    trim: true,
    maxlength: [20, "Last Name should be less than or equal to 20 character"],
  },

  mobileNumber: {
    type: String,
    trim: true,
    unique: [true, "Mobile Number is already in use"],
    required: [true, "Mobile Number should be provided"],
  },

  email: {
    type: String,
    trim: true,
    maxlength: [10, "Phone Number should be length 10"],
    minlength: [10, "Phone Number should be length 10"],
    required: [true, "Email shouls be provided"],
    unique: [true, "Email is already in use"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  password: {
    type: String,
    required: [true, "Password should be provided"],
    minlength: [6, "Password should be minimum 6 characters long"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
