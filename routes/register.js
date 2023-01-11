const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controller/register");

//REGISTER USE ROUTE
router.post("/user", registerUser);

module.exports = router;
