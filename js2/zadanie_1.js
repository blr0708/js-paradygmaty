// Создаем объект currentUser
const currentUser = {
  // --- Свойства (Właściwości) ---
  name: "Jan",
  surname: "Kowalski",
  email: "jan.kowalski@gmail.com",
  www: "www.kowalski.pl",
  userType: "admin",
  isActive: false,

  // --- Методы (Metody) ---
  
  // Метод show(), который выводит все данные в консоль
  show() {
    // Используем шаблонные строки и слово this для доступа к свойствам
    console.log(`Użytkownik: ${this.name} ${this.surname}`);
    console.log(`Email: ${this.email} | WWW: ${this.www}`);
    console.log(`Typ konta: ${this.userType} | Aktywny: ${this.isActive}`);
    console.log("-----------------------");
  },

  // Метод setActive, который меняет статус
  setActive(active) {
    // Берем СВОЕ свойство isActive и присваиваем ему НОВОЕ значение (active), 
    // которое передали в скобках
    this.isActive = active;
  }
};

// --- Проверяем, как это работает ---

console.log("До изменения статуса:");
currentUser.show(); // Вызываем метод show (скобки обязательны!)

// Меняем статус на true
currentUser.setActive(true);

console.log("После изменения статуса:");
currentUser.show(); // Проверяем, поменялось ли значение isActive