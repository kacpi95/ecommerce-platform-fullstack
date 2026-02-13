import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function dedupeById(products) {
  const map = new Map();
  for (const p of products) map.set(p.id, p);
  return [...map.values()];
}

async function main() {
  await prisma.favourite.deleteMany();
  await prisma.photo.deleteMany();
  await prisma.product.deleteMany();

  const womenProducts = [
    {
      id: 26,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Szpilki',
      brand: 'Sun zi',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/women-shoes-1.jpg',
        'http://localhost:3000/product-photos/women-shoes-2.jpg',
        'http://localhost:3000/product-photos/women-shoes-3.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 27,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Szpilki',
      brand: 'Sun zi',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/women-shoes-5.jpg',
        'http://localhost:3000/product-photos/women-shoes-6.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 28,
      gender: 'women',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/women-t-shirt-1.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-2.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-3.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 29,
      gender: 'women',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Jeansy',
      brand: 'Shin-tzu',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/women-trousers-1.jpg',
        'http://localhost:3000/product-photos/women-trousers-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
  ];

  const menProducts = [
    {
      id: 1,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-Shirt',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 2,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-Shirt',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 3,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        'http://localhost:3000/product-photos/man-t-shirt-5.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-6.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 4,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: ['http://localhost:3000/product-photos/man-t-shirt-7.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
  ];

  const childrenProducts = [
    {
      id: 30,
      gender: 'children',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Botki',
      brand: 'Sun zi',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        'http://localhost:3000/product-photos/children-shoes-3.jpg',
        'http://localhost:3000/product-photos/children-shoes-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 31,
      gender: 'children',
      category: 'obuwie',
      subcategory: 'sneakersy',
      productName: 'Sneakersy',
      brand: 'Sun zi',
      pricePLN: 199,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/children-shoes-5.jpg',
        'http://localhost:3000/product-photos/children-shoes-6.jpg',
        'http://localhost:3000/product-photos/children-shoes-7.jpg',
        'http://localhost:3000/product-photos/children-shoes-8.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 32,
      gender: 'children',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Jeansy',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/children-trousers-1.jpg',
        'http://localhost:3000/product-photos/children-trousers-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 33,
      gender: 'children',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Chinosy',
      brand: 'Sun zi',
      pricePLN: 599,
      priceUSD: 119,
      photos: [
        'http://localhost:3000/product-photos/children-trousers-5.jpg',
        'http://localhost:3000/product-photos/children-trousers-6.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
  ];

  const otherProducts = [
    {
      id: 1,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-Shirt',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 2,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-Shirt',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: ['http://localhost:3000/product-photos/man-t-shirt-7.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 3,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        'http://localhost:3000/product-photos/man-t-shirt-6.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-5.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 4,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 5,
      gender: 'men',
      category: 'odziez',
      subcategory: 'swetry',
      productName: 'Sweter',
      brand: 'Sun Tzu',
      pricePLN: 129,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/man-sweater-1.jpg',
        'http://localhost:3000/product-photos/man-sweater-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 6,
      gender: 'men',
      category: 'odziez',
      subcategory: 'swetry',
      productName: 'Sweter',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: ['http://localhost:3000/product-photos/man-sweater-3.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 7,
      gender: 'men',
      category: 'odziez',
      subcategory: 'swetry',
      productName: 'Sweter',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: ['http://localhost:3000/product-photos/man-sweater-4.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 8,
      gender: 'men',
      category: 'odziez',
      subcategory: 'swetry',
      productName: 'Sweter',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        'http://localhost:3000/product-photos/man-sweater-1.jpg',
        'http://localhost:3000/product-photos/man-sweater-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 9,
      gender: 'men',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Jeansy',
      brand: 'Sun Tzu',
      pricePLN: 129,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/man-trousers-1.jpg',
        'http://localhost:3000/product-photos/man-trousers-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 10,
      gender: 'men',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Spodnie dresowe',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/man-trousers-3.jpg',
        'http://localhost:3000/product-photos/man-trousers-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 11,
      gender: 'men',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Spodnie dresowe',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        'http://localhost:3000/product-photos/man-trousers-5.jpg',
        'http://localhost:3000/product-photos/man-trousers-6.jpg',
        'http://localhost:3000/product-photos/man-trousers-7.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 12,
      gender: 'men',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Spodnie dresowe',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        'http://localhost:3000/product-photos/man-trousers-7.jpg',
        'http://localhost:3000/product-photos/man-trousers-6.jpg',
        'http://localhost:3000/product-photos/man-trousers-5.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 13,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Buty wizytowe',
      brand: 'Sun Tzu',
      pricePLN: 129,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/man-shoes-1.jpg',
        'http://localhost:3000/product-photos/man-shoes-2.jpg',
        'http://localhost:3000/product-photos/man-shoes-3.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 14,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Buty wizytowe',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/man-shoes-4.jpg',
        'http://localhost:3000/product-photos/man-shoes-5.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 15,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Buty wizytowe',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        'http://localhost:3000/product-photos/man-shoes-6.jpg',
        'http://localhost:3000/product-photos/man-shoes-7.jpg',
        'http://localhost:3000/product-photos/man-shoes-8.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 16,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Buty wizytowe',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        'http://localhost:3000/product-photos/man-shoes-3.jpg',
        'http://localhost:3000/product-photos/man-shoes-2.jpg',
        'http://localhost:3000/product-photos/man-shoes-1.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 17,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Buty wizytowe',
      brand: 'Sun Tzu',
      pricePLN: 129,
      priceUSD: 39,
      photos: ['http://localhost:3000/product-photos/man-shoes-8.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 18,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'sportowe',
      productName: 'Sportowe',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/man-shoes-9.jpg',
        'http://localhost:3000/product-photos/man-shoes-10.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 19,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'sportowe',
      productName: 'Sportowe',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        'http://localhost:3000/product-photos/man-shoes-11.jpg',
        'http://localhost:3000/product-photos/man-shoes-12.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 20,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'sportowe',
      productName: 'Sportowe',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        'http://localhost:3000/product-photos/man-shoes-13.jpg',
        'http://localhost:3000/product-photos/man-shoes-14.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 21,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'sneakersy',
      productName: 'Sneakersy',
      brand: 'Sun Tzu',
      pricePLN: 129,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/man-shoes-11.jpg',
        'http://localhost:3000/product-photos/man-shoes-12.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 22,
      gender: 'men',
      category: 'akcesoria',
      subcategory: 'torby',
      productName: 'Torba',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: ['http://localhost:3000/product-photos/man-bag-1.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 23,
      gender: 'men',
      category: 'akcesoria',
      subcategory: 'torby',
      productName: 'Torba',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: ['http://localhost:3000/product-photos/man-bag-2.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 24,
      gender: 'men',
      category: 'akcesoria',
      subcategory: 'zegarki',
      productName: 'Zegarek',
      brand: 'Sun Tzu',
      pricePLN: 199,
      priceUSD: 49,
      photos: ['http://localhost:3000/product-photos/man-watch-1.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 25,
      gender: 'men',
      category: 'akcesoria',
      subcategory: 'zegarki',
      productName: 'Zegarek',
      brand: 'Sun Tzu',
      pricePLN: 129,
      priceUSD: 39,
      photos: ['http://localhost:3000/product-photos/man-watch-2.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 25,
      gender: 'men',
      category: 'akcesoria',
      subcategory: 'zegarki',
      productName: 'Zegarek',
      brand: 'Sun Tzu',
      pricePLN: 129,
      priceUSD: 39,
      photos: ['http://localhost:3000/product-photos/man-watch-3.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 26,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Szpilki',
      brand: 'Sun zi',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/women-shoes-7.jpg',
        'http://localhost:3000/product-photos/women-shoes-8.jpg',
      ],
      description: 'Opis produktu pobrany z back endu ;)',
      maintenanceInfo: 'Informacje o konserwacji pobrane z back-endu',
    },
    {
      id: 27,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Szpilki',
      brand: 'Sun zi',
      pricePLN: 149,
      priceUSD: 39,
      photos: ['http://localhost:3000/product-photos/women-shoes-4.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 28,
      gender: 'women',
      category: 'odziez',
      subcategory: 'swetry',
      productName: 'Sweter',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: ['http://localhost:3000/product-photos/women-sweater-3.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 29,
      gender: 'women',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Jeansy',
      brand: 'Shin-tzu',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/women-trousers-3.jpg',
        'http://localhost:3000/product-photos/women-trousers-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 34,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Szpilki',
      brand: 'Sun zi',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/women-shoes-1.jpg',
        'http://localhost:3000/product-photos/women-shoes-2.jpg',
        'http://localhost:3000/product-photos/women-shoes-3.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 75,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'sportowe',
      productName: 'Sportowe',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/women-shoes-9.jpg',
        'http://localhost:3000/product-photos/women-shoes-10.jpg',
        'http://localhost:3000/product-photos/women-shoes-11.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 76,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'sneakersy',
      productName: 'Sneakersy',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/women-shoes-12.jpg',
        'http://localhost:3000/product-photos/women-shoes-13.jpg',
        'http://localhost:3000/product-photos/women-shoes-14.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 77,
      gender: 'women',
      category: 'akcesoria',
      subcategory: 'torby',
      productName: 'Torebka',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/women-bag-1.jpg',
        'http://localhost:3000/product-photos/women-bag-2.jpg',
        'http://localhost:3000/product-photos/women-bag-3.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 78,
      gender: 'women',
      category: 'akcesoria',
      subcategory: 'torby',
      productName: 'Torebka',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: ['http://localhost:3000/product-photos/women-bag-4.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 79,
      gender: 'women',
      category: 'akcesoria',
      subcategory: 'zegarki',
      productName: 'Zegarek',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/women-watch-1.jpg',
        'http://localhost:3000/product-photos/women-watch-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 80,
      gender: 'women',
      category: 'akcesoria',
      subcategory: 'zegarki',
      productName: 'Zegarek',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/women-watch-3.jpg',
        'http://localhost:3000/product-photos/women-watch-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 312,
      gender: 'women',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/women-t-shirt-4.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-5.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-6.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 36,
      gender: 'women',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/women-t-shirt-7.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-8.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-9.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-10.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 37,
      gender: 'women',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Jeansy',
      brand: 'Shin-tzu',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/women-trousers-2.jpg',
        'http://localhost:3000/product-photos/women-trousers-1.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 388,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Szpilki',
      brand: 'Sun zi',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/women-shoes-2.jpg',
        'http://localhost:3000/product-photos/women-shoes-3.jpg',
        'http://localhost:3000/product-photos/women-shoes-1.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 39,
      gender: 'women',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/women-t-shirt-9.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-7.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-8.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-10.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 40,
      gender: 'women',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Jeansy',
      brand: 'Shin-tzu',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/women-trousers-3.jpg',
        'http://localhost:3000/product-photos/women-trousers-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 41,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Szpilki',
      brand: 'Sun zi',
      pricePLN: 49,
      priceUSD: 10,
      photos: ['http://localhost:3000/product-photos/women-shoes-4.jpg'],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 42,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Szpilki',
      brand: 'Sun zi',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/women-shoes-8.jpg',
        'http://localhost:3000/product-photos/women-shoes-7.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 43,
      gender: 'women',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/women-t-shirt-3.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-1.jpg',
        'http://localhost:3000/product-photos/women-t-shirt-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 44,
      gender: 'women',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Jeansy',
      brand: 'Shin-tzu',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/women-trousers-1.jpg',
        'http://localhost:3000/product-photos/women-trousers-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 38,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Szpilki',
      brand: 'Sun zi',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/women-shoes-1.jpg',
        'http://localhost:3000/product-photos/women-shoes-3.jpg',
        'http://localhost:3000/product-photos/women-shoes-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 45,
      gender: 'women',
      category: 'odziez',
      subcategory: 'swetry',
      productName: 'Sweter',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/women-sweater-1.jpg',
        'http://localhost:3000/product-photos/women-sweater-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 46,
      gender: 'women',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Jeansy',
      brand: 'Shin-tzu',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/women-trousers-4.jpg',
        'http://localhost:3000/product-photos/women-trousers-3.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 30,
      gender: 'children',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Botki',
      brand: 'Shin-tzu',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        'http://localhost:3000/product-photos/children-shoes-3.jpg',
        'http://localhost:3000/product-photos/children-shoes-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 31,
      gender: 'children',
      category: 'obuwie',
      subcategory: 'sneakersy',
      productName: 'Sneakersy',
      brand: 'Shin-tzu',
      pricePLN: 199,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/children-shoes-1.jpg',
        'http://localhost:3000/product-photos/children-shoes-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 32,
      gender: 'children',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Jeansy',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/children-trousers-1.jpg',
        'http://localhost:3000/product-photos/children-trousers-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 33,
      gender: 'children',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Legginsy',
      brand: 'Sun zi',
      pricePLN: 599,
      priceUSD: 119,
      photos: [
        'http://localhost:3000/product-photos/children-trousers-3.jpg',
        'http://localhost:3000/product-photos/children-trousers-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 46,
      gender: 'children',
      category: 'obuwie',
      subcategory: 'eleganckie',
      productName: 'Botki',
      brand: 'Shin-tzu',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        'http://localhost:3000/product-photos/children-shoes-3.jpg',
        'http://localhost:3000/product-photos/children-shoes-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 47,
      gender: 'children',
      category: 'obuwie',
      subcategory: 'sneakersy',
      productName: 'Sneakersy',
      brand: 'Shin-tzu',
      pricePLN: 199,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/children-shoes-5.jpg',
        'http://localhost:3000/product-photos/children-shoes-6.jpg',
        'http://localhost:3000/product-photos/children-shoes-7.jpg',
        'http://localhost:3000/product-photos/children-shoes-8.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 48,
      gender: 'children',
      category: 'odziez',
      subcategory: 'spodnie',
      productName: 'Chinosy',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/children-trousers-5.jpg',
        'http://localhost:3000/product-photos/children-trousers-6.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 49,
      gender: 'children',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun zi',
      pricePLN: 599,
      priceUSD: 119,
      photos: [
        'http://localhost:3000/product-photos/children-t-shirt-1.jpg',
        'http://localhost:3000/product-photos/children-t-shirt-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 51,
      gender: 'children',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun zi',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        'http://localhost:3000/product-photos/children-t-shirt-3.jpg',
        'http://localhost:3000/product-photos/children-t-shirt-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 52,
      gender: 'children',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun zi',
      pricePLN: 199,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/children-t-shirt-5.jpg',
        'http://localhost:3000/product-photos/children-t-shirt-6.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 53,
      gender: 'children',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/children-t-shirt-7.jpg',
        'http://localhost:3000/product-photos/children-t-shirt-8.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 54,
      gender: 'children',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-shirt',
      brand: 'Sun zi',
      pricePLN: 599,
      priceUSD: 119,
      photos: [
        'http://localhost:3000/product-photos/children-t-shirt-6.jpg',
        'http://localhost:3000/product-photos/children-t-shirt-5.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 56,
      gender: 'children',
      category: 'odziez',
      subcategory: 'swetry',
      productName: 'Sweter',
      brand: 'Sun zi',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        'http://localhost:3000/product-photos/children-sweater-1.jpg',
        'http://localhost:3000/product-photos/children-sweater-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 57,
      gender: 'children',
      category: 'odziez',
      subcategory: 'swetry',
      productName: 'Sweter',
      brand: 'Sun zi',
      pricePLN: 199,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/children-sweater-3.jpg',
        'http://localhost:3000/product-photos/children-sweater-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 58,
      gender: 'children',
      category: 'odziez',
      subcategory: 'swetry',
      productName: 'Sweter',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/children-sweater-5.jpg',
        'http://localhost:3000/product-photos/children-sweater-6.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 59,
      gender: 'children',
      category: 'odziez',
      subcategory: 'swetry',
      productName: 'Sweter',
      brand: 'Sun zi',
      pricePLN: 599,
      priceUSD: 119,
      photos: [
        'http://localhost:3000/product-photos/children-sweater-2.jpg',
        'http://localhost:3000/product-photos/children-sweater-1.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 61,
      gender: 'children',
      category: 'akcesoria',
      subcategory: 'torby',
      productName: 'Plecak',
      brand: 'Sun zi',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        'http://localhost:3000/product-photos/children-bag-1.jpg',
        'http://localhost:3000/product-photos/children-bag-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 62,
      gender: 'children',
      category: 'akcesoria',
      subcategory: 'torby',
      productName: 'Plecak',
      brand: 'Sun zi',
      pricePLN: 199,
      priceUSD: 39,
      photos: [
        'http://localhost:3000/product-photos/children-bag-3.jpg',
        'http://localhost:3000/product-photos/children-bag-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 63,
      gender: 'children',
      category: 'akcesoria',
      subcategory: 'torby',
      productName: 'Plecak',
      brand: 'Sun zi',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        'http://localhost:3000/product-photos/children-bag-5.jpg',
        'http://localhost:3000/product-photos/children-bag-6.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 64,
      gender: 'children',
      category: 'akcesoria',
      subcategory: 'zegarki',
      productName: 'Zegarek',
      brand: 'Sun zi',
      pricePLN: 599,
      priceUSD: 119,
      photos: [
        'http://localhost:3000/product-photos/children-watch-1.jpg',
        'http://localhost:3000/product-photos/children-watch-2.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 66,
      gender: 'children',
      category: 'akcesoria',
      subcategory: 'zegarki',
      productName: 'Zegarek',
      brand: 'Sun zi',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        'http://localhost:3000/product-photos/children-watch-3.jpg',
        'http://localhost:3000/product-photos/children-watch-4.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
  ];

  const allProducts = dedupeById([
    ...womenProducts,
    ...menProducts,
    ...childrenProducts,
    ...otherProducts,
  ]);

  for (const p of allProducts) {
    await prisma.product.create({
      data: {
        id: p.id,
        gender: p.gender,
        category: p.category,
        subcategory: p.subcategory,
        productName: p.productName,
        brand: p.brand,
        pricePLN: p.pricePLN,
        priceUSD: p.priceUSD,
        description: p.description,
        maintenanceInfo: p.maintenanceInfo,
        photos: {
          create: (p.photos ?? []).map((url) => ({ url })),
        },
      },
    });
  }

  const favouritesData = [
    { id: 1, productId: 3 },
    { id: 2, productId: 2 },
  ];

  for (const f of favouritesData) {
    await prisma.favourite.create({
      data: {
        id: f.id,
        productId: f.productId,
      },
    });
  }

  console.log(`✅ Seed finished. Products: ${allProducts.length}`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
