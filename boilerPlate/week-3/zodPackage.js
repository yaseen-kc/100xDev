const zod = require("zod");

function validateData(n) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidney: zod.array(zod.number()),
  });
  const response = schema.safeParse(n);
  console.log(response);
}

validateData({
  email: "ymkcmpd@gmail.com",
  password: "1,2,3,4,5,6",
  country: "IN",
  kidney: [1],
});
