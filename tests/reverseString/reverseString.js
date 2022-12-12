const reverseString = (str) => {
  if (typeof str !== "string") return "Input should be a string!";

  return str.split("").reverse().join("");
};

export default reverseString;
