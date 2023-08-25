const express = require("express");
const router = express.Router();
const {createSubscription, login} = require('../controllers/user')


router.post("/subscribe", async (req, res) => {
    createSubscription(req, res)
   });

   
router.post("/admin/login", async (req, res) => {
    login(req, res)
   });
   module.exports = router;
   