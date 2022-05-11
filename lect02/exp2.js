const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const callbackReadOneString = (string) => {
  console.log("Read string", string);
};

rl.on("line", callbackReadOneString);
