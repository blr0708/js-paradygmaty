const text = {
  // 1. Проверяет, есть ли слово в тексте
  check(txt, word) {
    // Метод .includes() ищет подстроку и сам возвращает true/false
    return txt.includes(word);
  },

  // 2. Считает количество символов (включая пробелы)
  getCount(txt) {
    // У строк, как и у массивов, есть свойство .length
    return txt.length;
  },

  // 3. Считает количество слов
  getWordsCount(txt) {
    // Разрезаем строку по пробелам (' ') и смотрим длину получившегося массива
    return txt.split(' ').length;
  },

  // 4. Делает первую букву каждого слова заглавной
  setCapitalize(txt) {
    // 1. Разрезаем на слова
    const words = txt.split(' ');
    
    // 2. Метод .map() проходит по каждому слову в массиве и меняет его
    const capitalizedWords = words.map(word => {
      // Берем первую букву (индекс 0), делаем большой, 
      // и приклеиваем остаток слова (начиная с индекса 1)
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // 3. Склеиваем обратно в текст с пробелами
    return capitalizedWords.join(' ');
  },

  // 5. Делает буквы поочередно большими и маленькими
  setMix(txt) {
    let result = "";
    
    for (let i = 0; i < txt.length; i++) {
      // Оператор % (остаток от деления). Если индекс четный (0, 2, 4...)
      if (i % 2 === 0) {
        result += txt[i].toLowerCase();
      } else {
        // Если индекс нечетный (1, 3, 5...)
        result += txt[i].toUpperCase();
      }
    }
    
    return result;
  },

  // 6. Генерирует случайный текст заданной длины
  generateRandom(lng) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < lng; i++) {
      // Генерируем случайный индекс от 0 до 25 (длина алфавита)
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      // Достаем случайную букву и приклеиваем к результату
      result += alphabet[randomIndex];
    }

    return result;
  }
};

// --- Тестируем работу нашего объекта ---

console.log("check:", text.check("ala ma kota", "kota"));              // Ожидаем: true
console.log("getCount:", text.getCount("ala ma kota"));                // Ожидаем: 11
console.log("getWordsCount:", text.getWordsCount("Ala ma kota"));      // Ожидаем: 3
console.log("setCapitalize:", text.setCapitalize("ala ma kota"));      // Ожидаем: "Ala Ma Kota"
console.log("setMix:", text.setMix("ala ma kota"));                    // Ожидаем: "aLa mA KoTa"
console.log("generateRandom:", text.generateRandom(10));               // Ожидаем: например "dkjiuhtjox"