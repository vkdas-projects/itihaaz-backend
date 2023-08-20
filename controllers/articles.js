const articleSchema = require("../schemas/articles");
const mongoose = require(`mongoose`);

// Get All
const getArticles = async (req, res) => {
  articleSchema
    .find({
      is_featured: undefined
    })
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get Featured 
const getFeaturedArticles = async (req, res) => {
  articleSchema
    .find({
      is_featured: true
    })
    .sort({ createdAt: -1 }).limit(4)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Create One
const createArticle = async (req, res) => {
  articleSchema
    .create(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};


// GetOne
const getSingleArticle = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({
      error: "No article found corresponding to the id given",
    });
  } else {
    articleSchema
      .findById(req.params.id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

// Update One
const updateArticle = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({
          error: "No article found corresponding to the id given",
        });
      } else {
        articleSchema
          .findOneAndUpdate({
            _id: req.params.id
          }, req.body)
          .then((result) => {
            console.log(result);
            res.status(200).json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
};

// Delete One
const deleteArticle = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({
          error: "No article found corresponding to the id given",
        });
      } else {
        articleSchema
          .findOneAndDelete({
            _id: req.params.id
          })
          .then((result) => {
            res.status(200).json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
};

module.exports = {
  createArticle,
  getArticles,
  getFeaturedArticles,
  getSingleArticle,
  updateArticle,
  deleteArticle
};
