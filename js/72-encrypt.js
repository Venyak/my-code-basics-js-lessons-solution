/*
	Реализуйте функцию encrypt(), которая принимает на вход исходное сообщение и возвращает зашифрованное. Алгоритм берет текст и и переставляет в нем каждые два подряд идущих символа
*/

const encrypt = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i += 2) {
    const next = str[i + 1] || '';
    result = `${result}${next}${str[i]}`;
  }

  return result;
};
