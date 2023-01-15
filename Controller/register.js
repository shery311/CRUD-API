const fs = require("fs");

const registerUser = (req, res) => {
  const users = JSON.parse(fs.readFileSync("./db/userApi.json", "UTF-8"));
  const myObject = users;

  //auto incrementing new user id
  let lastItem = myObject[myObject.length - 1];

  const generatedId = lastItem.id + 1;

  //Taking user data for register
  const newUser = {
    id: generatedId,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
    city: req.body.city,
    website: req.body.website,
    phone: req.body.phone,
    gender: req.body.gender,
  };

  //Checking user has entered mandatory fields
  if (
    req.body.password === null ||
    req.body.password === "" ||
    req.body.email === null ||
    req.body.email === ""
  ) {
    return res.status(403).json("Fields cannot be empty");
  }
  //Checking if user exists
  const email = req.body.email;
  let user = myObject.find((u) => u.email === email);
  if (user) return res.status(409).json("User already exists!");

  myObject.push(newUser);

  const q = JSON.stringify(myObject);
  fs.writeFile("./db/userApi.json", q, (err) => {
    // Error checking
    if (err) return res.status(409).json(err);
    return res.status(200).json("user has been created!");
  });
};

module.exports = { registerUser };
