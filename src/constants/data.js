import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Botella',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Botella',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | gaseosa',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Ron oscuro | Cerveza | Rodaja de lima',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Ron | Jugo de Limon | Azúcar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Azúcar moreno',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gingebre | Sweet Vermouth | Campari',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Sabor Supremo',
    subtitle: 'Reconocimiento a la excelencia culinaria.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Celebrando la creatividad culinaria.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Por nuestro servicio excepcional.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Por crear momentos gastronómicos memorables.',
  },
];

export default { wines, cocktails, awards };
