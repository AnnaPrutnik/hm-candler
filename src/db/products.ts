import firstProduct from '../../public/product/product-1.jpg';
import secondProduct from '../../public/product/product-2.jpg';
import thirdProduct from '../../public/product/product-3.jpg';
import fourthProduct from '../../public/product/product-4.jpg';

export const products = [
  {
    price: 10,
    name: 'Сердечко кохання',
    detail:
      'Запах: ніжний аромат троянди та ванілі. Для чого: для атмосфери романтичного настрою',
    image: firstProduct,
  },
  {
    price: 20,
    name: 'Вихір кохання',
    detail:
      'Запах: ніжний аромат лаванди. Для чого: для створення атмосфери затишку',
    image: secondProduct,
  },
  {
    price: 10,
    name: 'Веселка',
    detail:
      'Запах: Свіжий аромат лайма. Для чого: для енергії та свіжості в приміщені.',
    image: thirdProduct,
  },
  {
    price: 10,
    name: 'Жіноча чарівність',
    detail:
      'Запах: ніжний аромат лаванди та фрезій. Для чого: для затишку та комфорту.',
    image: fourthProduct,
  },
];
