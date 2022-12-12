import reverseString from "./reverseString";

test("Reverse string", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

test("Reverse string", () => {
  expect(reverseString("World")).toMatch("dlroW");
});
