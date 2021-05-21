const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @desc    Get Logged in User
// @access  Private
router.get("/", (req, res)=>{
    res.send("get logged in user");
})

// @route   POST api/auth
// @desc    Auth User & Token
// @access  Public
router.post("/", (req, res)=>{
    res.send("login user");
})

module.exports = router;