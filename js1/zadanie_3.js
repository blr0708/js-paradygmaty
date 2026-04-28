const printNumbers = (nr) => {
  let result = ""; 
  
  for (let i = 1; i <= nr; i++) {   
    result += i; 
  }
  return result; 
};

// Проверяем, как работает наша функция
console.log(printNumbers(5));  // Должно вывести: "12345"
console.log(printNumbers(10)); // Должно вывести: "12345678910"