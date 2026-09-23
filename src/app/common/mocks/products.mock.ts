import {Product} from '../interfaces/interfaces';

export const PRODUCTS_MOCK: Product[] = [
  {
    id: '1',
    title: 'Camiseta',
    description: 'Camiseta Molona',
    category: "clothing",
    imageUrl: 'https://static.kiabi.es/images/pack-de-2-camisetas-basicas-blanco-bze23_1_hd1.jpg?width=800',
    rating: {
      rate: 4,
      count: 213
    },
    price: 18,
  },
  {
    id: '2',
    title: 'Pantalones',
    description: 'Pantalones Molones',
    category: "clothing",
    imageUrl: 'https://mivestidorazul.es/12341-large_default/pantalon-recto-tela-vikamma-azul-federal.jpg',
    rating: {
      rate: 4.5,
      count: 123
    },
    price: 23,
  },
  {
    id: '3',
    title: 'Radio',
    description: 'Radio guapa',
    category: 'electronics',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3WEYe3jrDLanSIkktzshQoA8mdkVLHHscFC0ecfkdPeRH8YjgyGgOxEQ&s=10',
    rating: {
      rate: 3,
      count: 332
    },
    price: 18,
  },
  {
    id: '4',
    title: 'Televisor',
    description: 'Televisor Micro QLED 88"',
    category: "electronics",
    imageUrl: 'https://www.electrodepot.es/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/P10011707-2.jpg',
    rating: {
      rate: 4.2,
      count: 4442
    },
    price: 779,
  },
  {
    id: '5',
    title: 'Carl el mazmorrero',
    description: 'Un hombre y un gato encerrados en una mazmorra contra el universo.',
    category: 'books',
    imageUrl: 'https://m.media-amazon.com/images/I/71c0uGhwikL._UF1000,1000_QL80_AIweblab1381794,T1_.jpg',
    rating: {
      rate: 5,
      count: 3242
    },
    price: 24,
  },
  {
    id: '6',
    title: 'Planta',
    description: 'Cactus para los que no saben cuidar plantas',
    category: "home",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50dCQ9VCcU3_Cwu-hxLI8wS-Ob2B_k-dSKmGL7RSytgvrIof462GxNEs&s=10',
    rating: {
      rate: 5,
      count: 2323
    },
    price: 5,
  }
]
