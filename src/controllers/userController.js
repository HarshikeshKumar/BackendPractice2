function createUser(req, res) {
  console.log("User Controller called");
  console.log(req.body);

  // TODO: Register the User Logic

  return res.json({
    message: "OK",
  });
}

module.exports = {
  createUser,
};
