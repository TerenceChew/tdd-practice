import capitalize from "./capitalize";

test("Capitalize", () => {
  expect(capitalize("hello")).toMatch("Hello");
});

test("Capitalize", () => {
  expect(capitalize("world")).toMatch("World");
});

test("Capitalize", () => {
  expect(capitalize("monday")).toMatch("Monday");
});

test("Capitalize", () => {
  expect(capitalize("july")).toMatch("July");
});

test("Number as input", () => {
  expect(capitalize(5)).toMatch("Input should be a string!");
});
