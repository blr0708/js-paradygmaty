const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let numbersOverTen = 0;

console.log("Начинаем генерацию 10 чисел:");

for (let i = 0; i < 10; i++) {
  const randomNum = generateRandom(1, 20);
  console.log(`Число ${i + 1}: ${randomNum}`);

  if (randomNum > 10) {
    numbersOverTen++;
  }
}

console.log("-------------------");
console.log(`Всего чисел больше 10: ${numbersOverTen}`);

if (numbersOverTen >= 5) {
  console.log("udało się");
} else {
  console.log("niestety nie");
}