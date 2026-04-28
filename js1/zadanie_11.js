const lengthOfLastWord = (s) => {
  const cleanString = s.trim();
  const wordsArray = cleanString.split(' ');
  const lastWord = wordsArray[wordsArray.length - 1];

  return lastWord.length;
};

const example1 = "Hello World";
console.log(`Przykład 1: ${lengthOfLastWord(example1)}`);

const example2 = "   fly me   to   the moon  ";
console.log(`Przykład 2: ${lengthOfLastWord(example2)}`);

const example3 = "javascript";
console.log(`Przykład 3: ${lengthOfLastWord(example3)}`);
