import calculator from "./calculator";

const { add, subtract, multiply, divide } = calculator;

test("Add", () => {
  expect(add(1, 10)).toBe(11);
});

test("Subtract", () => {
  expect(subtract(1, 5)).toBe(-4);
});

test("Multiply", () => {
  expect(multiply(3, 8)).toBe(24);
});

test("Multiply", () => {
  expect(multiply(123, 0)).toBe(0);
});

test("Divide", () => {
  expect(divide(100, 5)).toBe(20);
});

test("Divide", () => {
  expect(divide(5, 4)).toBeCloseTo(1.25);
});

test("Invalid inputs", () => {
  expect(divide(5, "5")).toBe("Inputs must be numbers only!");
});
