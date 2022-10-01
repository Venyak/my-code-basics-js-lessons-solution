/*
	В этом уроке вам нужно будет реализовать две функции isPalindrome() и isNotPalindrome()

	Функция isPalindrome() определяет, является ли слово палиндромом или нет. Палиндром это слово, которое читается одинаково в обоих направлениях.
	Функция isNotPalindrome() проверяет что слово НЕ является палиндромом
*/

const isPalidrome = (word) => word.toLowerCase() === reverse(word.toLowerCase());
const isNotPalindrome = (word) => !isPalidrome(word);
