const readline = require("readline");
const path = require("path");
const fs = require("fs");

const resultFilePath = path.join(
  path.dirname(process.argv[1]),
  "logResult.txt"
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function callbackForA(answer) {
  a = answer;

  rl.question("Enter b:", callbackForB);
}

function callbackForB(answer) {
  b = answer;

  rl.question("Enter c:", callbackForC);
}

function callbackForC(answer) {
  c = answer;

  showResult();
}

function showResult() {
  result = calculateResult(a, b, c);
  console.log("Result:", result);

  fs.writeFile(resultFilePath, result, () => {});

  rl.on("close", () => {
    console.log(`Результат добавлен в журнал: ${resultFilePath}`);
  });
  rl.close();
}

function calculateResult(a, b, c) {
  if (!a.trim() || !b.trim() || !c.trim()) {
    console.log("Вы не ввели значение коэффициента");
    process.exit(1);
  } else {
    Number(a, b, c);
    const D = b * b - 4 * a * c;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      console.log("Неправильный ввод коэффициента. Введите три числа.");
      process.exit(2);
    }

    if (a == 0) {
      console.log("Ошибка! коэффициент 'а' не может равняться 0.");
      process.exit(3);
    }

    if (D > 0) {
      const x1 = (-b + Math.sqrt(D)) / (2 * a);
      const x2 = (-b - Math.sqrt(D)) / (2 * a);
      return `Дискриминант = ${D} \nКорни уравнений: ${x1}; ${x2}`;
    }

    if (D === 0) {
      const x = -b / (2 * a);
      return `Дискриминант = ${D} \nКорень уравнения: ${x}`;
    }

    if (D < 0) {
      return `Дискриминант = ${D} \nУ уравнения нет действительных корней`;
    }
  }
}

rl.question("Enter a:", callbackForA);
