"use strict";
let num = 0;
while (num < 5) {
    console.log(num);
    num++;
}
let num1 = 5;
while (num1) {
    console.log(num1);
    num1--;
}
//Если необходимо хотя бы раз выполнить код, можно так
let num2 = 0;
do {
    console.log(num2);
    num2++
} while (num2 < 0);
//Цикл For
// for (начало;Условие;шаг цикла){}
for (let num3 = 2; num3 < 5; num3++) {
    console.log(num3);
}
let num4 = 0
for (; num4 < 5; num4++) {
    console.log(num4);
    if (num4 == 3) break;
}
console.log(`Конец работы, num = ${num4}`);
let num5 = 0;
for (; num5 < 5; num5++) {
    if (num5 == 2) continue;
    console.log(num5);
}
//Метки цикла
firstfor: for (let num6 = 0; num6 < 5; num6++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            continue firstfor;
        }
        console.log(num6);
    }
}
