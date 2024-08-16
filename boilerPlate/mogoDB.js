// Mongoose HandsON
const express = require("express");
const app = express;
const mongoose = require("mongoose");

const url =
  "mongodb+srv://yaseen:nQBNxuXShSjfG6AI@cluster0.hhiek.mongodb.net/myDataBase?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Connection error", err));

const User = mongoose.model("Users", {
  username: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  //   const username = req.body.username;
  //   const email = req.body.email;
  //   const password = req.body.password;
  const { username, password, email } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }
    const user = new User({
      username,
      email,
      password,
    });
    await user.save();
    res.status(201).send("User created successfully");
  } catch (err) {
    console.error("Save error", err);
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
