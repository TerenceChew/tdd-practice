import reverseString from "./reverseString";

test("Reverse string", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

test("Reverse string", () => {
  expect(reverseString("World")).toMatch("dlroW");
});

test("Number as input", () => {
  expect(reverseString(555)).toMatch("Input should be a string!");
});
