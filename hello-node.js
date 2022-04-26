const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const c = Number(process.argv[4]);
const D = b * b - 4 * a * c;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Неправильный ввод коэффициента. Введите три числа.");
  process.exit(2);
}

if (a == 0) {
  console.log("Ошибка! коэффициент 'а' не может равняться 0.");
  process.exit(3);
}

console.log(`Дискриминант = ${D}`);

if (D > 0) {
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);
  console.log(`Корни уравнений: ${x1}; ${x2}`);

  process.exit(0);
}

if (D === 0) {
  const x = -b / (2 * a);
  console.log(`Корень уравнения: ${x}`);
  process.exit(0);
}

if (D < 0) {
  console.log("У уравнения нет действительных корней");
  process.exit(0);
}

// const mode = process.env.MODE;

// // console.log("mode =", mode, mode === "production");

// if (mode === "production") {
//   console.log("App in production node!");
//   process.exit(0);
// }

// console.log("App in DEV(!!!) node!");

// const argv = process.argv;
// const userName = argv[2];
// const userAge = argv[3];

// const nodePath = argv[0].split("\\").pop();
// const scriptPath = argv[1].split("\\").pop();

// if (!userAge) {
//   console.log(["try: ", nodePath, " ", scriptPath, " Vasya 18"].join(""));
//   process.exit(1);
// }

// if (userName) {
//   console.log(`Hello, ${userName}! ${userAge}`);
// } else {
//   console.log(`Hello, NodeJS!`);
// }
// process.exit(0);
