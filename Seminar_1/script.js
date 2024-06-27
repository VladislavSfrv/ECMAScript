// Задание 1 (тайминг 20 минут) 

// 1. Создайте функцию mergeArrays, которая принимает два 
// массива и возвращает новый массив, содержащий все 
// элементы из обоих массивов. Используйте spread 
// оператор для объединения массивов. 
// mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6] 

// function mergeArrays(array1, array2) {
//     return ([...array1, ...array2]);
// }

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// // 2. Создайте функцию removeDuplicates, которая принимает 
// // любое количество аргументов и возвращает новый 
// // массив, содержащий только уникальные значения. 
// // Используйте rest оператор для сбора всех аргументов в 
// // массив а затем filter для определения дубликатов. 
// // Удаленные дубликаты(1, 2, 3, 2, 4, 1, 5); // [1, 2, 3, 4, 5]

// function removeDuplicates(...rest) {
//     return rest.filter((el, id) => rest.indexOf(el) === id);
// }

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Задание 2 (тайминг 25 минут) 

// 1. Напишите функцию getEvenNumbers, которая принимает массив 
// чисел в качестве аргумента и возвращает новый массив, 
// содержащий только четные числа. 

// function getEvenNumbers(...array) {
//     return array.filter(el => el % 2 === 0);
// }

// console.log(getEvenNumbers(1, 2, 3, 2, 4, 1, 5, 222));

// // 2. Задача: Напишите функцию calculateAverage, которая принимает 
// // массив чисел в качестве аргумента и возвращает среднее значение 
// // этих чисел. 

// /**
//  * 
//  * @param  {Array} array 
//  * @returns 
//  */
// function calculateAverage(...array) {
//     return array.reduce((accumulator, element) => accumulator + element) / array.length;
// }

// console.log(calculateAverage(1, 2, 3, 2, 4, 1, 5, 222));

// // 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в 
// // качестве аргумента и возвращает новую строку, в которой первая 
// // буква каждого слова является заглавной.

// function capitalizeFirstLetter(str) {
//     let string = str.split(' ');
//     let newArray = string.map(el => el.charAt(0).toUpperCase() + el.slice(1));
//     return newArray.join(' ');
// }
// console.log(capitalizeFirstLetter('sdf asdf asdf azdf asdf'));

// Задание 3 (тайминг 20 минут) 
// 1. Напишите функцию createCalculator, которая принимает начальное 
// значение и возвращает объект с двумя методами: add и subtract. 
// Метод add должен увеличивать значение на переданное число, а 
// метод subtract должен уменьшать значение на переданное число. 
// Значение должно быть доступно только через методы объекта, а не 
// напрямую.

// function createCalculator(initialValue) {
//     function add(argument){
//         return initialValue += argument;
//     }
//     function subtract(argument) {
//         return initialValue -= argument;
//     }
//     return  {add, subtract};
// }

// const calc = createCalculator(45);
// console.log(calc.add(45));
// console.log(calc.add(45));
// console.log(calc.subtract(5));

// Задание 4 (тайминг 15 минут) 
// 1. Напишите функцию createGreeting, которая принимает имя 
// пользователя и возвращает функцию, которая будет возвращать 
// приветствие с использованием этого имени. 

// // Пример использования: 
// постоянное приветствие = createGreeting('Джон'); 
// console.log(приветствие()); // "Привет, Джон!"

// function createGreeting(name) {
//     return () => `Hello, ${name}`
// }

// const greeting = createGreeting('Джон');
// console.log(greeting());

// Задание 5 (тайминг 15 минут) 
// 1. Задача: Напишите функцию createPasswordChecker, которая 
// принимает минимальную длину пароля в качестве аргумента и 
// возвращает функцию для проверки введенного пароля. 
// Возвращаемая функция должна принимать пароль и возвращать 
// true, если его длина больше или равна заданной длине,  
// в противном случае - false.  

// Пример использования: 
// const isPasswordValid = createPasswordChecker(8); 
// console.log(isPasswordValid('password')); // true 
// console.log(isPasswordValid('secret')); // false

// function createPasswordChecker(minLengthPassword) {
//     return (password) => password.length >= minLengthPassword;
// }

// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password'));
// console.log(isPasswordValid('secret'));

// Задание 6 (тайминг 25 минут) 
// 1. Напишите рекурсивную функцию sumDigits, которая принимает 
// положительное целое число в качестве аргумента и возвращает 
// сумму его цифр. 

// // Пример использования: 
// console.log(сумма цифр(123)); // 6 (1 + 2 + 3) 
// console.log(сумма цифр(456789)); // 39 (4 + 5 + 6 + 7 + 8 + 9)

// function sumDigits(number) {
//     if (number < 10) {
//         return number;
//     } else {
//         return (number % 10) + sumDigits(Math.floor(number / 10));
//     }
// }

// console.log(sumDigits(123));


//=============================ДОМАШНЕЕ ЗАДАНИЕ===========================================


// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter(count) {
    function increment() {
        return ++count;
    }
    function decrement() {
        return --count;
    }
    return {increment, decrement};
}

let counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

function findElementByClass(class1, DOMEl) {
    if(class1 === DOMEl.classList.value){
        return DOMEl;
    } else {
        return findElementByClass(class1, DOMEl.parentElement);
    }
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass('my-class', rootElement);
console.log(targetElement);