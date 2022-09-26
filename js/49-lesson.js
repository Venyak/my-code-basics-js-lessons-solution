/*
	Допишите функцию truncate(), которая обрезает переданную строку до указанного количества символов, добавляет в конце многоточие и возвращает получившуюся строку. Подобная логика часто используется на сайтах, чтобы отобразить длинный текст в сокращенном виде.

	Функция принимает два параметра:

		Строка, которую нужно обрезать
		Число символов, которые нужно оставить
*/

const truncate = (text, length) => {
  const result = `${text.slice(0, length)}...`;
  return result;
};

console.log(truncate('Hello', 4));