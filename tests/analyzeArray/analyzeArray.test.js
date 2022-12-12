import analyzeArray from "./analyzeArray";

test("Analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Analyze array", () => {
  expect(analyzeArray([1, 1, 1, 1, 1, 2])).toStrictEqual({
    average: 1.17,
    min: 1,
    max: 2,
    length: 6,
  });
});

test("Analyze array", () => {
  expect(analyzeArray([50, 100, 50, 300, 500])).toStrictEqual({
    average: 200,
    min: 50,
    max: 500,
    length: 5,
  });
});

test("Analyze array", () => {
  expect(analyzeArray([50, 100, 50, "NaN"])).toBe(
    "Array should contain numbers only!"
  );
});
