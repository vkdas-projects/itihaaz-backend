const mongoose = require(`mongoose`);

const userSubscriptionSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  });

  module.exports = mongoose.model("User", userSubscriptionSchema);