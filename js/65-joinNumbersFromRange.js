/*
	Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку
*/

const joinNumbersFromRange = (start, finish) => {
  let result = '';
  let i = start;

  while (i <= finish) {
    result = `${result}${i}`;
    i++;
  }

  return result;
};
