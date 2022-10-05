/*
	Реализуйте функцию printReversedWordBySymbol(), которая печатает переданное слово посимвольно, но делает это в обратном порядке
*/

const printReversedWordBySymbol = (text) => {
  let i = text.length - 1;

  while (i >= 0) {
    console.log(text[i]);
    i = i - 1;
  }
};
