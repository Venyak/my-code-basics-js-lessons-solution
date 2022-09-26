/*
	Реализуйте функцию isLeapYear(), которая определяет, является ли год високосным или нет.
*/

const isLeapYear = (year) => {
  const result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  return result;
};
