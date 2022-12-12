const analyzeArray = (arr) => {
  const processedArr = arr.map((n) => Number(n));
  const obj = {};

  obj.average = Number(
    (
      processedArr.reduce((total, n) => total + n, 0) / processedArr.length
    ).toFixed(2)
  );

  obj.min = processedArr.sort((a, b) => a - b)[0];

  obj.max = processedArr.sort((a, b) => b - a)[0];

  obj.length = processedArr.length;

  return obj;
};

export default analyzeArray;
