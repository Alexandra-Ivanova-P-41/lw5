export function getAllTotalPrice(elements) {
  let total = 0;
  elements.forEach(function (item) {
    total += item.totalPrice;
  });
  if (Number.isNaN(total)) {
    return false;
  }
  return total;
}

export function setTotalPrice(element) {
  if (Number.isNaN(+element.priceForOne) || Number.isNaN(+element.count)) {
    return false;
  }
  element.totalPrice = element.priceForOne * element.count;
  return true;
}

export function setCount(element, count) {
  const countNumber = +count;
  if (!Number.isNaN(countNumber) && countNumber >= 0) {
    element.count = countNumber;
    return true;
  } else {
    return false;
  }
}

export function setPrice(element, price) {
  const priceNumber = +price;
  if (!Number.isNaN(priceNumber) && priceNumber >= 0) {
    element.priceForOne = priceNumber;
    return true;
  } else {
    return false;
  }
}
