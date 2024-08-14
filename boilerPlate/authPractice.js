const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "Harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array

  // ! Find Method
  const user = ALL_USERS.find(
    (user) => user.username === username && user.password === password
  );
  return user !== undefined;

  // ! Filter Method
  // const user1 = ALL_USERS.filter(
  //   (user) => user.username === username && user.password === password
  // );
  // return user1.length > 0;

  // ! Some Method
  // return ALL_USERS.some(
  //   (x) => x.username === username && x.password === password
  // );
}

app.post("/signIn", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // Return a list of users other than this username
    res.json({
      users: ALL_USERS.filter(function (value) {
        if (value.username == username) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
