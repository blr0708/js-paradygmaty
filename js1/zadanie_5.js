const checkPalindrom = (txt) => {
  const lowerCaseWord = txt.toLowerCase();
  const reversedWord = lowerCaseWord.split('').reverse().join('');
  
  return lowerCaseWord === reversedWord;
};

console.log(checkPalindrom("Kajak")); // Wyświetli: true
console.log(checkPalindrom("kot"));   // Wyświetli: false