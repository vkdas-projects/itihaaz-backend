const express = require("express");
const router = express.Router();
const {createArticle, getArticles, getSingleArticle,updateArticle ,deleteArticle, getFeaturedArticles} = require('../controllers/articles')

// GET all articles
router.get("/", (req, res) => {
    getArticles(req,res)
});

router.get("/featured", (req, res) => {
  getFeaturedArticles(req,res)
});


// GET a single article
router.get("/:id", (req, res) => {
    getSingleArticle(req,res)
});

// POST a article
router.post("/", async (req, res) => {
 createArticle(req, res)
});

// DELETE a article
router.delete("/:id", (req, res) => {
  deleteArticle(req, res)
});

// UPDATE a article
router.patch("/:id", (req, res) => {
 updateArticle(req,res)
});

module.exports = router;
