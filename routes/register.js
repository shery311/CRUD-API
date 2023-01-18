const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controller/register");

//REGISTER USER ROUTE
router.post("/user", registerUser);

module.exports = router;
