const formatCurrency = (amount) => {
  return `${amount < 0 ? "-" : ""}$${Math.abs(amount).toFixed(2)}`;
};

const getCoins = (cents) => {
  let remainingCents = cents;
  const quarters = Math.floor(remainingCents / 25);
  remainingCents %= 25;

  const dimes = Math.floor(remainingCents / 10);
  remainingCents %= 10;

  const nickels = Math.floor(remainingCents / 5);
  remainingCents %= 5;

  return {
    quarters,
    dimes,
    nickels,
    pennies: remainingCents,
  };
};

module.exports.getCoins = getCoins;
module.exports.formatCurrency = formatCurrency;
