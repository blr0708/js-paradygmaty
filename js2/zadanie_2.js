class Book {
    constructor() {
        this.users = [];
    }
  
    addUser(name, age, phone) {
        this.users.push({
            name: name,
            age: age,
            phone: phone
        });
    }

    showUsers() {
        console.log("Wszyscy użytkownicy w książce");
        for (let user of this.users) {
            console.log(user);
        }
    }
    
    findByName(name) {
        let user = this.users.find(user => user.name === name);
        if (!user) {
            console.log(false);
        } else {
            console.log(user);
        }
    }

    findByPhone(phone) {
        let user = this.users.find(user => user.phone === phone);
        if (!user) {
            console.log(false);
        } else {
            console.log(user);
        }
    }

    getCount() {
        console.log(this.users.length);
    }
}

let book = new Book();
book.addUser("Text", 20, "123456");
book.addUser("Text1", 22, "654321");

book.showUsers();
book.findByName("Text");
book.findByPhone("654321");
book.getCount();