const articleSchema = require("../schemas/articles");
const mongoose = require(`mongoose`);
const jwt = require("jsonwebtoken");
const userSchema = require("../schemas/user");
// Get All
const getAllArticles = async (req, res) => {
  articleSchema
    .find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get All except featured
const getArticles = async (req, res) => {
  articleSchema
    .find({
      is_featured: false,
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
      is_featured: true,
    })
    .sort({ createdAt: -1 })
    .limit(4)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Create One
const createArticle = async (req, res) => {
  const token = req.headers["x-access-token"];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  try {
    const email = decoded._doc.email;
    const user = await userSchema.findOne({
      email: email,
    });
    console.log(user);
    if (user !== null) {
      articleSchema
        .create(req.body)
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.status(401).json({
        message: "User not found!",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      status: "error",
      error: "invalid token",
    });
  }
};

// GetOne
const getSingleArticle = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({
      error: "No article found corresponding to the id given",
    });
  } else {
    articleSchema
      .findOne({
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

// Update One
const updateArticle = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({
      error: "No article found corresponding to the id given",
    });
  } else {
    articleSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body
      )
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
        _id: req.params.id,
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
  getAllArticles,
  getArticles,
  getFeaturedArticles,
  getSingleArticle,
  updateArticle,
  deleteArticle,
};
