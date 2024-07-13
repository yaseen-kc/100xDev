const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const cleanedData = data
    .split(" ")
    .filter((word) => word !== "")
    .join(" ");

  fs.writeFile("test.txt", cleanedData, "utf8", (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
      return;
    }
    console.log("File successfully cleaned and saved.");
  });
});
