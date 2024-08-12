const express = require("express");
const app = express();
const zod = require("zod");
// const schema = zod.array(zod.number());
const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN").or(zod.literal("US")),
  kidney: zod.array(zod.number()),
});

app.use(express.json());

app.post("/totalKidney", (req, res) => {
  const kidney = req.body.kidney;
  const response = schema.safeParse(kidney);
  if (!response.success) {
    res.status(411).json({ msg: "Invalid Input" });
  } else {
    res.send({
      response,
    });
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    msg: "Something is wrong",
  });
});

app.listen(3000, () => {
  console.log("Server Started");
});
