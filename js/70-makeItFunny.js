/*
	Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
*/

const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';

  while (i < str.length) {
    let curChar = str[i];

    if ((i + 1) % n === 0) {
      result = `${result}${curChar.toUpperCase()}`;
    } else {
      result = `${result}${curChar}`;
    }

    i++;
  }

  return result;
};
