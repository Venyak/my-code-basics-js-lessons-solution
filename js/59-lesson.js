/*
	Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. Она принимает адрес сайта и возвращает его с https:// в начале.
*/

const normalizeUrl = (adress) => {
  if (adress.startsWith('https://')) {
    return adress;
  } else {
    return `https://${adress}`;
  }
};
