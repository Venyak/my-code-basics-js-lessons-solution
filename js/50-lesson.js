/*
	Реализуйте функцию getHiddenCard(), которая принимает на вход номер кредитки (состоящий из 16 цифр) в виде строки и возвращает его скрытую версию, которая может использоваться на сайте для отображения. Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581. Другими словами, функция заменяет первые 12 символов, на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.
*/

const getHiddenCard = (cardNumber, length = 4) => {
  const result = `${'*'.repeat(length)}${cardNumber.slice(12)}`;
  return result;
};

console.log(getHiddenCard('2034399002125581', 4));
