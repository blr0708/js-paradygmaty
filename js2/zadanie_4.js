// Обращаемся к глобальному "предку" всех строк - String.prototype
// И добавляем туда новый метод mirror
String.prototype.mirror = function() {
  // ВАЖНО: здесь this - это сама строка, к которой мы применяем метод
  // Мы уже знаем этот трюк из задания с палиндромом: 
  // Разрезать на буквы -> Перевернуть массив -> Склеить обратно
  return this.split('').reverse().join('');
};

// --- Проверяем, как это работает ---

const text = "Ala ma kota";
// Теперь ЛЮБАЯ строка умеет вызывать .mirror()
console.log(text.mirror()); // Выведет: "atok am alA"

// Работает даже напрямую со строкой в кавычках!
console.log("JavaScript".mirror()); // Выведет: "tpircSavaJ"