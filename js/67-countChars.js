/*
	Реализуйте функцию, которая считает, сколько раз входит буква в предложение, чтобы регистр букв был не важен.
*/

const countChars = (str, char) => {
  const lowerCaseStr = str.toLowerCase();
  const lowerCaseChar = char.toLowerCase();
  let i = 0;
  let count = 0;

  while (i < str.length) {
    if (lowerCaseStr[i] === lowerCaseChar) {
      count++;
    }

    i++;
  }

  return count;
};
