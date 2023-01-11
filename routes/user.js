const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  loginUser,
} = require("../Controller/users");

//GET ALL USERS ROUTE
router.get("/", getAllUsers);

//GET USER BY ID ROUTE
router.get("/:id", getUserById);

//DELETE ROUTE

router.delete("/:id", deleteUser);

//UPDATE ROUTE
router.patch("/:id", updateUser);

//LOGIN ROUTE

router.post("/login", loginUser);
module.exports = router;
