const express = require("express");
const app = express();
const userRoute = require("./routes/user.js");
const registerRoute = require("./routes/register.js");
const bodyParser = require("body-parser");

//middlewares
app.use(bodyParser.json());
app.use("/user", userRoute);
app.use("/register", registerRoute);

app.listen(8800, () => {
  console.log("Api Working!");
});
