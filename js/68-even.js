/*
	Реализуйте функцию even(), которая возвращает новую строку, состоящую из чётных символов исходной строки.
*/

const even = (str) => {
  let i = 1;
  let result = '';

  while (i < str.length) {
    result = `${result}${str[i]}`;
    i = i + 2;
  }

  return result;
};

console.log(even('lanab'));
