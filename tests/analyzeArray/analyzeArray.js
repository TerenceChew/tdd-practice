const analyzeArray = (arr) => {
  const isValidArr = arr.every((e) => typeof e === "number");

  if (!isValidArr) return "Array should contain numbers only!";

  const obj = {};

  obj.average = Number(
    (arr.reduce((total, n) => total + n, 0) / arr.length).toFixed(2)
  );

  obj.min = arr.sort((a, b) => a - b)[0];

  obj.max = arr.sort((a, b) => b - a)[0];

  obj.length = arr.length;

  return obj;
};

export default analyzeArray;
