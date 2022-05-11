const mode = process.env.MODE;

// console.log("mode =", mode, mode === "production");

if (mode === "production") {
  console.log("App in production node!");
  process.exit(0);
}

console.log("App in DEV(!!!) node!");

const argv = process.argv;
const userName = argv[2];
const userAge = argv[3];

const path = require("path");

const nodePath = argv[0].split(path.sep).pop();
const scriptPath = argv[1].split(path.sep).pop();

if (!userAge) {
  console.log(["try: ", nodePath, " ", scriptPath, " Vasya 18"].join(""));
  process.exit(1);
}

if (userName) {
  console.log(`Hello, ${userName}! ${userAge}`);
} else {
  console.log(`Hello, NodeJS!`);
}
process.exit(0);
