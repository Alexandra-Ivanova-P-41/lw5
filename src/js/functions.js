export function getAllTotalPrice(elements) {
  let total = 0;
  elements.forEach(function (item) {
    total += item.totalPrice;
  });
  return total;
}

export function setTotalPrice(element) {
  element.totalPrice = element.priceForOne * element.count;
  return element;
}

export function setCount(element, count) {
  const countNumber = +count;
  if (!Number.isNaN(countNumber) && countNumber >= 0) {
    element.count = countNumber;
  } else {
    alert('Invalid input value');
  }
}

export function setPrice(element, price) {
  const priceNumber = +price;
  if (!Number.isNaN(priceNumber) && priceNumber >= 0) {
    element.priceForOne = priceNumber;
  } else {
    alert('Invalid input value');
  }
}
