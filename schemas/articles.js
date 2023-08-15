const mongoose = require(`mongoose`);

const articleDataSchema = mongoose.Schema({
    heading: {
      type: String,
    },
    image_url: {
      type: String,
    },
    description: {
      type: String,
    },
    media_dimensions: {
      height: String,
      width: String
    }
  });

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    data: [articleDataSchema],
    author: {
      type: String,
      required: true,
    },
    likes_count: {
      type: Number,
    },
    summary: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("Article", articleSchema);
