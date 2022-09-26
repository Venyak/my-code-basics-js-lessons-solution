/*
	Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву первого слова к верхнему регистру
*/

const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

console.log(capitalize('lidiya'));
