const fs = require("fs");

const users = JSON.parse(fs.readFileSync("./db/userApi.json", "UTF-8"));
const userCards = JSON.parse(fs.readFileSync("./db/userCards.json", "UTF-8"));

const getAllUsers = (req, res) => {
  fs.readFile("./db/userApi.json", "utf-8", (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).send(data);
  });
};

const getUserById = (req, res) => {
  let id = +req.params.id;
  let user = users.find((u) => u.id === id);
  if (!user) res.status(400).json({ message: "No user exist!" });
  return res.status(200).send(user);
};

const deleteUser = (req, res) => {
  let userId = req.params.id;
  let existUser = users.findIndex((user) => {
    return user.id == Number.parseInt(userId);
  });

  if (existUser >= 0) {
    let removedAccount = users[existUser];
    users.splice(existUser, 1);
    const q = JSON.stringify(users);
    fs.writeFile("./db/userApi.json", q, (err) => {
      res.status(400).send({
        status: "success",
        Message: "User has been succesfully removed",
        Removed: `user with id ${removedAccount.id} has been removed`,
      });
    });
  } else {
    res.status(404).send({ status: "failed", Message: "User does not exist" });
  }
};

const updateUser = (req, res) => {
  // Taking user data for update
  let id = +req.params.id;
  let updatedUser = users.find((user) => {
    return user.id === id;
  });

  if (updatedUser) {
    let index = users.indexOf(updatedUser);

    Object.assign(updatedUser, req.body);

    users[index] = updatedUser;
    // validating fields

    const q = JSON.stringify(users);
    fs.writeFile("./db/userApi.json", q, (err) => {
      res.status(200).send({
        status: "success",
        Message: "User has been succesfully updated",
      });
    });
  } else {
    res.status(404).send({ status: "failed", Message: "User does not exist" });
  }
};

const loginUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  // compairing email and password of existing user
  let existsUser = users.find(
    (x) => x.email === email && x.password === password
  );
  // condition for checking user
  if (existsUser) {
    allCards = [];
    // let userCard = userCards.find((c) => c.userId == existsUser.id);
    userCards?.map((c) => {
      if (c.userId === existsUser.id) {
        allCards.push(c);
      }
    });
    return res.status(201).send(allCards);
  }
  return res.status(404).json("email or password is incorrect");
};
module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  loginUser,
};
