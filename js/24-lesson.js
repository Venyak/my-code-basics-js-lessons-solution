/* 
	Напишите программу, которая будет генерировать заголовок и тело письма, используя уже готовые переменные, и выводить получившиеся строки на экран. Для заголовка используйте переменные firstName и greeting, запятую и восклицательный знак. Выведите это на экран в правильном порядке. Для тела письма используйте переменные info и intro, при этом второе предложение должно быть на новой строке. 
	Выполните задание, используя только два console.log().
*/

let info = "We couldn't verify your mother's maiden name.";
let intro = 'Here is important information about your account security.';

let firstName = 'Joffrey';
let greeting = 'Hello';

// BEGIN (write your solution here)

console.log(greeting + ', ' + firstName + '!');
console.log(intro + '\n' + info);

// END
