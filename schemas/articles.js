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
    },
    card_type: {
      type: String,
    },
  });

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
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
    },
    color_theme: {
      type: String,
      required: true,
    },
    category:{
      type: String,
      required: true,
    },
    is_featured: {
      type: Boolean
    },
    data: [articleDataSchema],
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("Article", articleSchema);
