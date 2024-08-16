// Mongoose HandsON
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://yaseen:nQBNxuXShSjfG6AI@cluster0.hhiek.mongodb.net/myDataBase?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Connection error", err));

const User = mongoose.model("Users", {
  name: String,
  username: String,
  email: String,
}); 

const user = new User({
  name: "Zildjian",
  email: "spam@gmail.com",
  username: "@Zildjian",
});
user
  .save()
  .then(() => console.log("Done"))
  .catch((err) => console.error("Save error", err));
