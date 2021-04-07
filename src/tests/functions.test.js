const functions = require('../js/functions');

test('Changing the price value', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  functions.setPrice(productsList[0], 51);
  expect(productsList[0].priceForOne).toBe(51);

  let result = functions.setPrice(productsList[1], 50);
  expect(result).toBe(true);
  expect(productsList[1].priceForOne).toBe(50);

  result = functions.setPrice(productsList[2], 'a');
  expect(result).toBe(false);
  expect(productsList[2].priceForOne).toBe(5);
});

test('Changing the count value', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  functions.setCount(productsList[0], 41);
  expect(productsList[0].count).toBe(41);

  let result = functions.setCount(productsList[1], 40);
  expect(result).toBe(true);
  expect(productsList[1].count).toBe(40);

  result = functions.setCount(productsList[2], 'a');
  expect(result).toBe(false);
  expect(productsList[2].count).toBe(200);
});

test('Calculating the total amount', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];
  
  let result = functions.getAllTotalPrice(productsList);
  expect(result).toBe(false);

  productsList.forEach(function (item) {
    functions.setTotalPrice(item);
  });

result = functions.getAllTotalPrice(productsList);
  expect(result).toBe(5000);
});

test('Will calculateTotalPrice return the total sum of the item', () => {
  const productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 'f' },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];

  let result = functions.setTotalPrice(productsList[0]);
  expect(result).toBe(false);

  result = functions.setTotalPrice(productsList[1]);
  expect(result).toBe(true);
  expect(productsList[1].totalPrice).toBe(2000);
});
