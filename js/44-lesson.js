/*
	Данные, вводимые пользователями, часто содержат лишние пробельные символы в конце или начале строки. 
	Обновите переменную firstName записав в неё то же самое значение, но обработанное методом .trim(). Распечатайте то, что получилось, на экран.
*/

let firstName = '  Grigor   \n';

firstName = firstName.trim();

console.log(firstName);