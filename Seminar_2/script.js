'use strict';

// Задание 1 (тайминг 20 минут) 

// 1. Создайте объект Person, представляющий человека, с 
// следующими свойствами: name, age и gender. Добавьте 
// также методы introduce и changeName. Метод introduce 
// должен выводить информацию о человеке в консоль,  
// включая его имя, возраст и пол. Метод changeName должен  
// изменять имя человека на новое заданное значение.  

// person.name = "John";
// person.age = 25;
// person.gender = "male";
// // "My name is John. I'm 25 years old and I identify as male." 
// person.introduce(); 
// person.changeName("Mike");
// // "My name is Mike. I'm 25 years old and I identify as male." 
// person.introduce();

// const Person = {
//     name : "John",
//     age : 25,
//     gender : "male",
//     introduce() {
//         console.log(`My name is ${this.name}. I'm ${this.age} years old and I am ${this.gender}`);
//     },
//     changeName(name) {
//         this.name = name;
//     },
// }


// Person.introduce();
// Person.changeName("Mike");
// Person.introduce();

// 1. Создайте объект animal со свойством name и методом eat(), который 
// выводит сообщение о том, что животное ест. Создайте объект dog со 
// свойством name и методом bark(), который выводит сообщение о 
// том, что собака лает. Одолжите метод eat() из объекта animal для  
// объекта dog, чтобы вывести сообщение о том, что собака ест. 
 
// dog.eat(); // "Рекс ест".

// const animal = {
//     name : "Raks",
//     eat() {
//         console.log(`${this.name} eats`);
//     },
// }

// const dog = {
//     name : "Dog",
//     bark() {
//         console.log(`${this.name} bark`);
//     },
// }

// dog.eat = animal.eat;
// dog.eat();

// Создайте обычную функцию add, которая будет складывать this.a и this.b  
// и возвращать значение, которое получим. 
// Создать объект, в котором будут свойства `a` и `b`, со значениями в виде  
// чисел (любые значения). 
// Необходимо вызвать функцию add так, чтобы она правильно отработала с  
// нашим объектом.

// function add(){
//     return this.a + this.b;
// }

// const obj = {
//     a : 5,
//     b : 6,
// }

// console.log(add.call(obj));

// Создайте класс Person, который имеет свойства name и age, а также 
// метод introduce(), который выводит сообщение в консоль с  
// представлением имени и возраста персоны. 
// постоянное лицо = новое лицо ("Джон", 25); 
// person.introduct(); // "Меня зовут Джон, и мне 25 лет".

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     introduce(){
//         console.log(`My names ${this.name} and I'm ${this.age} old`);
//     }
// }

// const newPerson = new Person("John", 25);
// newPerson.introduce();

// Создайте класс BankAccount, который представляет банковский счет. 
// У него должны быть свойства accountNumber (номер счета) и balance 
// (баланс), а также методы deposit(amount) для пополнения счета, 
// withdraw(amount) для снятия денег со счета и метод printBalance, 
// который отобразит в консоль текущий баланс счета. Класс должен иметь 
// также статическое свойство bankName со значением "GBank", которое 
// содержит название банка. 

// class BankAccount {
//     nameBank = "GBank";
//     constructor(accountNumber, balance){
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
    
//     deposit(amount){
//         if (amount < 0) {
//             console.log('Введите сумму больше 0');
//         } else{
//             return this.balance += amount; 
//         }
//     }

//     withdraw(amount){
//         if(this.balance >= amount){
//             if (amount < 0) {
//                 console.log("Введите сумму больше 0");
//             } else{
//                 return this.balance -= amount;
//             }
//         }else{
//             console.log("На счете недостаточно средств")
//         }
//     }

//     printBalance(){
//         console.log(`${this.nameBank} account ${this.accountNumber} balance ${this.balance}`);
//     }
// }

// const account1 = new BankAccount("1234567890", 1000); 
// account1.printBalance();
// account1.deposit(1000);
// account1.printBalance();
// account1.withdraw(500);
// account1.printBalance();
// account1.withdraw(100000);
// account1.printBalance();

// const account2 = new BankAccount("351622338141", 0);
// account2.deposit(500); 
// account2.withdraw(200); 
// account2.withdraw(1500); // Insufficient funds in account "1234567890" 
// account2.withdraw(-200); // Wrong deposit amount, must be a positive number. 
// account2.deposit(-500); // Wrong deposit amount, must be a positive number. 
//  // Wrong deposit amount, must be a positive number. 
// account2.printBalance(); // GBank account "1234567890" balance: 1300

// Задание 1: "Управление библиотекой книг"

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

// // Пример использования класса
// const book = new Book("BookName1", "Author1", 123);
// book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123"

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages} `);
    }
}

const book = new Book("1984", "John Oryell", 500);
book.displayInfo();

// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте в консоль.

// // Пример использования класса
// const student = new Student("John Smith", 16, "10th grade");
// student.displayInfo(); // "Name: John Smith, Age: 16, Grade: 10th grade"\

class Student {
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo(){
        connsole.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const student = new Student("John Smith", 16, "10th grade");
student.displayInfo();