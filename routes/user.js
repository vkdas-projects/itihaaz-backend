const express = require("express");
const router = express.Router();
const {createSubscription} = require('../controllers/user')


router.post("/subscribe", async (req, res) => {
    createSubscription(req, res)
   });

   module.exports = router;
   