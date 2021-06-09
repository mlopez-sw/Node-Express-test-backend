const { objectModel } = require("../models/object");
const { userModel } = require("../models/user");

const objects = [
  {
    id: "asdjkla324",
    number_prop: 1,
    string_prop: "Server-side post",
    Object_prop: {
      key1: "value1",
      key2: "value2",
    },
  },
  {
    id: "asdjkl422lk",
    number_prop: 1,
    string_prop: "Other Server-side post",
    Object_prop: {
      key1: "value3",
      key2: "value4",
    },
  },
];

exports.getDummyObjects = (req, res, next) => {
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: objects,
  });
};

exports.getObject = (req, res, next) => {
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: objects,
  });
};

exports.postObject = (req, res, next) => {
  userModel.findOne({ email: "test@testemail.test" }).then((user) => {
    if (!user)
      return res.status(401).json({
        message: "Auth failed",
      });

    // const user2 = new userModel({
    //   email: "test@testemail.ar",
    //   password: "asdkdsalas",
    // });
    const user3 = new userModel({
      email: "test@testemailaa.ar",
      password: "asdkdsalas",
    });
    const obj = new objectModel({
      number_prop: 2,
      string_prop: "aasd",
      numbers_array_prop: [1, 2, 3],
      object_prop: user,
      objects_array_prop: [user],
    });

    obj
      .save()
      .then((result) => {
        res.status(200).json({
          message: "Posts created successfully!",
          post: result,
        });
      })
      .catch((error) => {
        console.log("-----------");
        console.log(error);
        console.log("-----------");
        res.status(500).json({
          message: "Internal server error",
          error: error,
        });
      });
  });

  // const user = new userModel({
  //   email: "test@testemail.uy",
  //   password: "asdkdsalas",
  // });
};
