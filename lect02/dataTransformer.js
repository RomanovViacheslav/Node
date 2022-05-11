const readline = require("readline");
const path = require("path");
const fs = require("fs");

const resultFilePath = path.join(
  path.dirname(process.argv[1]),
  "transformed_data.txt"
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const callbackReadOneString = (string) => {
  const transformedString = string + " -- " + string + "\n";
  const opts = { flag: "a" };
  fs.writeFileSync(resultFilePath, transformedString, opts);
};

rl.on("line", callbackReadOneString);
rl.on("close", () => {
  console.log(`Done, Result file: ${resultFilePath}`);
});
