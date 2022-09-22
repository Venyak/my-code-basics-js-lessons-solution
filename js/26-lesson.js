/*
	Вы столкнулись с таким кодом, который выводит на экран общее количество комнат во владении нынешнего короля:
		let king = 'King Balon the 6th';
		console.log(king + ' has ' + (6 * 17) + ' rooms.');
	Избавьтесь от магических чисел, создав новые переменные, и выведите текст на экран.
*/

let king = 'King Balon the 6th';

// BEGIN (write your solution here)
let castlesCount = 6;
let roomsPerCastle = 17;
let roomsCount = castlesCount * roomsPerCastle;

console.log(king + ' has ' + roomsCount + ' rooms.');
// END
