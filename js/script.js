"use strict";

function showMessege() {
    console.log("Сообщение");
}
showMessege();
function calcSum(numOne, numTwo) {
    console.log(`Цифра номер один:${numOne}`);
    console.log(`Цифра номер два:${numTwo}`);
    let numSum = numOne + numTwo;
    console.log(numSum);
}
calcSum(1, 2);
function calcSum1(numOne, numTwo, more, less) {
    let numSum1 = numOne + numTwo;
    if (numSum1 > 3) {
        more();
    }
    else {
        less();
    }
}
function showMoreMessege() {
    console.log("Больше, чем 3");
}
function showLessMessege() {
    console.log("Меньше, чем 3");
}
calcSum1(1, 5, showMoreMessege, showLessMessege);
let getVar = calcSum1;
//ВЫзвать функцию можно и через объявление переменной
getVar(1, 1, showMoreMessege, showLessMessege);
calcSum1(2, 5, showMoreMessege, showLessMessege);
//Объявляя ф-ию через Function вызвать ее можно из любого места кода
//а если через переменную, то вызвать можно только после объяаления, ранее нельзя
//Стрелочная ф-ия/ ф-ия стрелка
//let имя переменной = (параметр, .., параметр) => выражение
//Пример
let getMess = (text, name) => text + ',' + name + '!';
console.log(getMess('Hi', 'Tolia'));
//setTimeout позволяет вызвать ф-ию один раз с задержской  в опред время
//setInterval позволяет повторно вызывать ф-ию с опред интерваломм
//синтаксис setTimeout (ф-ия или код, задержка, параметр, .., параметр);
function getMess1(text, name) {
    console.log(`${text},${name}`);
}
setTimeout(getMess1, 3000, 'Привет', 'Толя!');
function getMess2(text, name) {
    console.log(`${text},${name}`);
}
setInterval(getMess2, 3000, 'Эй', 'Толя!');
//Рекурсия ф-ии с setTimeout
function showNum(num) {
    console.log(num);
    if (num < 5) {
        setTimeout(showNum, 1000, ++num);
    }
}
setTimeout(showNum, 1000, 1);