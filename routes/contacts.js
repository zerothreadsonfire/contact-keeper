const express = require("express");
const router = express.Router();

// @route   Get api/contacts
// @desc    Get Contacts
// @access  Public
router.get("/", (req, res)=>{
    res.send("get contact");
})

// @route   POST api/contacts
// @desc    Add contact
// @access  Public
router.post("/", (req, res)=>{
    res.send("login user");
})

// @route   PUT api/contacts/:id
// @desc    Update contacts
// @access  Public
router.put("/:id", (req, res)=>{
    res.send("update contacts");
})
// @route   DELETE api/contacts/:id
// @desc    Delete Contact
// @access  Public
router.delete("/:id", (req, res)=>{
    res.send("login user");
})


module.exports = router;