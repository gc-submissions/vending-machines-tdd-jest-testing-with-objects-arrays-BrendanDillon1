const {
  calculateChange,
  calculateTotal,
  addItem,
  removeItem,
  isSufficientPayment,
} = require("../src/js/cart-functions.js");

describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1", () => {
    const result = calculateChange(5, 6);
    expect(result).toBe(1);
  });

  test("Given total 12.30 and payment 13.03, it returns 0.73.", () => {
    const result = calculateChange(12.3, 13.03);
    expect(result).toBe(0.73);
  });

  test("Given total 9 and payment 10, it returns 1.", () => {
    const result = calculateChange(9, 10);
    expect(result).toBe(1);
  });
});

describe("isSufficientPayment", () => {
  test("add isSufficientPayment tests here", () => {
    const result = isSufficientPayment(5, 6);
    expect(result).toBe(true);
  });

  test("add isSufficientPayment tests here", () => {
    const result = isSufficientPayment(10, 7);
    expect(result).toBe(false);
  });
  test("add isSufficientPayment tests here", () => {
    const result = isSufficientPayment(3, 3);
    expect(result).toBe(true);
  });
});

describe("calculateTotal", () => {
  test("Given an itemsArray of one item with price 4.99, it returns 4.99.", () => {
    expect(calculateTotal([{ name: "Item1", price: 4.99 }])).toBe(4.99);
  });

  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52.", () => {
    expect(
      calculateTotal([
        { name: "Item1", price: 3.5 },
        { name: "Item2", price: 12.99 },
        { name: "Item3", price: 0.03 },
      ])
    ).toBe(16.52);
  });

  test("Given an empty itemsArray, it returns 0.", () => {
    expect(calculateTotal([])).toBe(0);
  });
});

describe("addItem", () => {
  test("Add item to an empty array.", () => {
    const items = [];
    addItem(items, "Beans", 3);
    expect(items).toEqual([{ name: "Beans", price: 3 }]);
  });

  test("Add item to an array with one item.", () => {
    const items = [{ name: "Beans", price: 3 }];
    addItem(items, "Sugar", 2);
    expect(items).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
});

describe("removeItem", () => {
  test("Remove the first item from an array of three items.", () => {
    const items = ["item1", "item2", "item3"];
    removeItem(items, 0);
    expect(items).toEqual(["item2", "item3"]);
  });
});
