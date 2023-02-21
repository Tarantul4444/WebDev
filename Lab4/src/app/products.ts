export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 373600,
    description:
      'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8b/h66/31489166606366/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
  },
  {
    id: 2,
    name: 'Apple iPhone 11 128Gb Slim Box черный',
    price: 292970,
    description:
      'Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8b/h66/31489166606366/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000',
  },
  {
    id: 3,
    name: 'Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 700880,
    description:
      'OLED, Super Retina XDR display с возможностью постоянной работы.',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hab/hed/62948780671006/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000',
  },
  {
    id: 4,
    name: 'Apple iPhone 14 128Gb черный',
    price: 421000,
    description:
      'OLED, Super Retina XDR display с возможностью постоянной работы.',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h47/hc8/63072540065822/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
  },
  {
    id: 5,
    name: 'Apple iPhone 13 128Gb белый',
    price: 373070,
    description:
      'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h27/hc9/46392664162334/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000',
  },
  {
    id: 6,
    name: 'Apple iPhone 13 128Gb синий',
    price: 369370,
    description:
      'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4f/h4b/46392661671966/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
  },
  {
    id: 7,
    name: 'Apple iPhone 14 Pro 256Gb фиолетовый',
    price: 631200,
    description:
      'OLED, Super Retina XDR display с возможностью постоянной работы.',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h82/h83/62948396662814/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000',
  },
  {
    id: 8,
    name: 'Apple iPhone 14 Pro 128Gb фиолетовый',
    price: 585500,
    description:
      'OLED, Super Retina XDR display с возможностью постоянной работы.',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4c/h6b/32690569838622/apple-iphone-11-64gb-slim-box-cernyj-100692387-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000',
  },
  {
    id: 9,
    name: 'Apple iPhone 11 64Gb Slim Box черный',
    price: 259225,
    description:
      'Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1d/h69/62948389683230/apple-iphone-14-pro-128gb-fioletovyj-106363283-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000',
  },
  {
    id: 10,
    name: 'Apple iPhone 14 128Gb голубой',
    price: 421360,
    description:
      'OLED, Super Retina XDR display с возможностью постоянной работы.',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h93/h56/63073057112094/apple-iphone-14-128gb-goluboj-106363150-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
