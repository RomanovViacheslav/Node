const readline = require("readline");
const path = require("path");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const resultFilePath = path.join(
  path.dirname(process.argv[1]),
  "nameTranslit.txt"
);

function translit(str) {
  const ru = new Map([
    ["а", "a"],
    ["б", "b"],
    ["в", "v"],
    ["г", "g"],
    ["д", "d"],
    ["е", "e"],
    ["є", "e"],
    ["ё", "e"],
    ["ж", "j"],
    ["з", "z"],
    ["и", "i"],
    ["ї", "yi"],
    ["й", "i"],
    ["к", "k"],
    ["л", "l"],
    ["м", "m"],
    ["н", "n"],
    ["о", "o"],
    ["п", "p"],
    ["р", "r"],
    ["с", "s"],
    ["т", "t"],
    ["у", "u"],
    ["ф", "f"],
    ["х", "h"],
    ["ц", "c"],
    ["ч", "ch"],
    ["ш", "sh"],
    ["щ", "shch"],
    ["ы", "y"],
    ["э", "e"],
    ["ю", "u"],
    ["я", "ya"],
  ]);

  str = str.replace(/[ъь]+/g, "");

  return Array.from(str).reduce(
    (s, l) =>
      s +
      (ru.get(l) ||
        (ru.get(l.toLowerCase()) === undefined && l) ||
        ru.get(l.toLowerCase()).toUpperCase()),
    ""
  );
}

const callbackReadName = (string) => {
  const transformedString = translit(string) + "\n";
  const opts = { flag: "a" };
  fs.writeFileSync(resultFilePath, transformedString, opts);
};

rl.on("line", callbackReadName);
