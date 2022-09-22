/* Напишите программу, которая берет исходное количество евро, записанное в переменную eurosCount, переводит евро в доллары и выводит на экран. Затем полученное значение переводит в рубли и выводит на новой строчке. */

let eurosCount = 100;
let dollarsPerEuro = 1.25;
let rublesPerDollar = 60;

let dollarsCount = eurosCount * dollarsPerEuro;
let rublesCount = dollarsCount * rublesPerDollar;
console.log(dollarsCount);
console.log(rublesCount);
