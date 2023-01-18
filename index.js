const express = require("express");
const app = express();
const userRoute = require("./routes/user.js");
const registerRoute = require("./routes/register.js");
const bodyParser = require("body-parser");

const url = "https://smiling-ruby-cormorant.cyclic.app/";
//middlewares
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to CRUD API Testing",
    getAllUsers: "use /api/user to get all users",
    getUsersById: "use /api/user/:id to get specific user",
  });
});
app.use("/api/user", userRoute);
app.use(url + "/api/register", registerRoute);

app.listen(8800, () => {
  console.log("Api Working!");
});
