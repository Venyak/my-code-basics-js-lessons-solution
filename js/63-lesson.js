/*
	Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.
*/

const printNumbers = (initialNumber) => {
  // BEGIN (write your solution here)
  let i = 0;

  while (initialNumber > 0) {
    console.log(initialNumber);
    initialNumber = initialNumber - 1;
  }

  console.log('finished!');
  // END
};
