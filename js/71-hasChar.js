/*
	Реализуйте функцию hasChar(), которая проверяет (с учётом регистра), содержит ли строка указанную букву.
*/

const hasChar = (str, char) => {
  let i = 0;

  while (i < str.length) {
    if (str[i] === char) {
      return true;
    }

    i++;
  }

  return false;
};
