const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controller/register");

const url = "https://smiling-ruby-cormorant.cyclic.app/";
//REGISTER USER ROUTE
router.post("/user", registerUser);

module.exports = router;
