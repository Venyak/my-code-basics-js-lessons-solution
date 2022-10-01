/*
	Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ (по порядковому номеру, а не по его индексу) и возвращает его наружу. Если такого символа нет, то функция возвращает пустую строку.
*/

const getLetter = (word, number) => {
  const index = number - 1;
  const value = word[index] || '';
  return value;
};
