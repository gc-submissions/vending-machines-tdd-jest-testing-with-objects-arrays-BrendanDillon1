const { formatCurrency, getCoins } = require("../src/js/money-functions.js");

describe("formatCurrency", () => {
  test('Given amount 1, it returns "$1.00".', () => {
    expect(formatCurrency(1)).toBe("$1.00");
  });
});
describe("getCoins", () => {
  test.todo("add getCoins tests here");
});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", () => {
    expect(getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });
});
