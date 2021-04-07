const observable = require('../js/observable');

test('Changing the price value', () => {
  let productsList = [
    { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
    { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
    { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
  ];

  let checkChange = 0;
  function change() {
    checkChange = 1;
  }

  productsList = observable.createObservableArray(productsList, change);

  expect(checkChange).toBe(0);
  productsList[0].count = 1;
  expect(checkChange).toBe(1);

});
