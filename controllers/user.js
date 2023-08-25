const userSchema = require("../schemas/user");
const jwt = require("jsonwebtoken");

// Create One
const createSubscription = async (req, res) => {
  userSchema
    .create(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const login = async (req, res) => {
  try {
    const result = await userSchema.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (result !== null) {
      console.log(result);
      let token = jwt.sign({
        ...result
      }, process.env.JWT_SECRET);
      console.log(token);
      res.status(200).json({
        user: token,
      });
    } else {
      res.status(200).json({
        user: result,
      });
    }
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

module.exports = {
  createSubscription,
  login,
};
