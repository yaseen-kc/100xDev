const fs = require("fs");

fs.writeFile("test.txt", "hello World", "utf8", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Done");
  }
});
