const { userModel } = require("../models/user");

exports.createUser = (req, res, next) => {
  const user = new userModel({
    email: req.body.email,
    password: req.body.password,
  });
  console.log(user);
  user
    .save()
    .then((result) => {
      res.status(200).json({
        message: "User created successfully!",
        user: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Invalid credentials",
        error: error,
      });
    });
};

exports.loginUser = (req, res, next) => {
  userModel.findOne({ email: req.body.email }).then((user) => {
    if (!user)
      return res.status(401).json({
        message: "Auth failed",
      });
    res.status(200).json({
      message: "User fetched successfully!",
      user: user,
    });
  });
};
