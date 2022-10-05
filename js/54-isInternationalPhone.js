/*
	Реализуйте функцию, которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.
*/

isInternationalPhone = (phone) => {
  const firstLetter = phone[0];
  return firstLetter === '+';
};
