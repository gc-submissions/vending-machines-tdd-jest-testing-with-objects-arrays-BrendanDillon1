const calculateChange = (total, payment) => {
  return total - payment;
};

const isSufficientPayment = (total, payment) => {
  return payment >= total;
};

const calculateTotal = (itemsArray) => {
  return itemsArray.reduce((acc, curr) => acc + curr.price, 0);
};

const addItem = (itemsArray, name, price) => {
  itemsArray.push({ name, price });
};

const removeItem = (itemsArray, index) => {
  itemsArray.splice(index, 1);
};

module.exports.calculateChange = calculateChange;
module.exports.isSufficientPayment = isSufficientPayment;
module.exports.calculateTotal = calculateTotal;
module.exports.addItem = addItem;
module.exports.removeItem = removeItem;
