/*
	Реализуйте функцию multiplyNumbersFromRange(), которая перемножает числа в указанном диапазоне включая границы диапазона. 
*/

const multiplyNumbersFromRange = (start, finish) => {
  let i = start;
  let sum = 1;

  while (i <= finish) {
    sum = sum * i;
    i++;
  }

  return sum;
};
