const express = require("express");
const app = express();
const userRoute = require("./routes/user.js");
const registerRoute = require("./routes/register.js");
const bodyParser = require("body-parser");

//middlewares
app.use(bodyParser.json());
app.use("/api/user", userRoute);
app.use(
  "https://smiling-ruby-cormorant.cyclic.app/api/register",
  registerRoute
);

app.listen(8800, () => {
  console.log("Api Working!");
});
