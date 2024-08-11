const express = require("express");
const app = express();

// middleware

app.use(express.json());

function userMiddleware(req, res, next) {
  const username = req.query.username;
  const password = req.query.password;
  if (username != "harkirath" || password != "pass") {
    res.status(403).json({
      msg: "Incorrect Credentials",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Wrong input",
    });
  } else {
    next();
  }
}

app.get("/healthCheckup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your health is okay");
});

app.get("/kidneyCheckup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your kidney is okay");
});

app.get("/heartCheckup", userMiddleware, (req, res) => {
  res.send("Your heart is okay");
});

// Global Catch || Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
  res.json({
    msg: "Something is wrong",
  });
});

app.listen(3000, () => {
  console.log("Server Started");
});
