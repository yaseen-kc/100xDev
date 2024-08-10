const express = require("express");
const app = express();

// middleware

app.get("/healthCheckup", (req, res) => {
  console.log("Headers received:", req.headers); // Log headers

  const kidneyId = req.query.kidneyId;
  const username = req.query.username;
  const password = req.query.password;

  if (username != "harkirath" || password != "pass") {
    res.status(403).json({
      msg: "User not found",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Wrong Input",
    });
    return;
  }

  res.json({ msg: "You are healthy" });
});

app.listen(3000, () => {
  console.log("Server Started");
});
