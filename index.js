const express = require("express");
const app = express();
const userRoute = require("./routes/user.js");
const registerRoute = require("./routes/register.js");
const bodyParser = require("body-parser");

//middlewares
app.use(bodyParser.json());
app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to CRUD API Testing",
    getAllUsers: "use /api/user to get all users",
    getUsersById: "use /api/user/:id to get specific user",
  });
  next();
});
app.use("/api/user", userRoute);
app.use("/api/register", registerRoute);

app.listen(8800, () => {
  console.log("Api Working!");
});
