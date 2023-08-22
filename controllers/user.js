const userSchema = require("../schemas/user");

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

  module.exports = {
    createSubscription
  };
  