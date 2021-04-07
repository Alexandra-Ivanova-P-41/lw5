import { setTotalPrice, getAllTotalPrice, setCount, setPrice } from './functions';
import { createObservableArray } from './observable';

let productsList = [
  { id: 1, name: 'Молоко', count: 40, priceForOne: 50 },
  { id: 2, name: 'Хлеб', count: 100, priceForOne: 20 },
  { id: 3, name: 'Лук', count: 200, priceForOne: 5 },
];

function updateUI() {
  const tableTemplateSource = document.querySelector('.table-template').innerHTML;
  const tableTemplate = Handlebars.compile(tableTemplateSource);
  const totalPrice = getAllTotalPrice(productsList);
  const tableHTML = tableTemplate({ productsList, totalPrice });
  document.querySelector('.table').innerHTML = tableHTML;
  const inputs = document.querySelectorAll('.table-row-cell__input');
  inputs.forEach(function (item) {
    item.addEventListener('dblclick', (e) => {
      const focusInput = e.target;
      focusInput.setAttribute('contenteditable', 'true');
      focusInput.focus();
    });
  });
  inputs.forEach((input) => {
    input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        const elementId = +input.getAttribute('data-id');
        const productListElement = productsList.find(function (item) {
          if (item.id === elementId) {
            return true;
          }
          return false;
        });
        if (input.classList.contains('table-row-cell__input--count')) {
          if (!setCount(productListElement, +e.target.innerText)) {
            alert('Invalid input value!');
          }
        } else if (input.classList.contains('table-row-cell__input--priceForOne')) {
          if (!setPrice(productListElement, +e.target.innerText)) {
            alert('Invalid input value!');
          }
        }
        setTotalPrice(productListElement);
      }
    });
  });
}

window.onload = function onload() {
  productsList.forEach(function (item) {
    setTotalPrice(item);
  });
  productsList = createObservableArray(productsList, updateUI);
  updateUI();
};
