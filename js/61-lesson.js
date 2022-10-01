/*
	Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.
*/

const convertText = (text) => {
  let result;
  const firstChar = text[0];

  if (text === '') {
    result = '';
  } else if (firstChar !== firstChar.toUpperCase()) {
    result = reverse(text);
  } else {
    result = text;
  }

  return result;
};
