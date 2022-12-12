const capitalize = (str) => {
  if (typeof str !== "string") return "Input should be a string!";

  return str[0].toUpperCase() + str.slice(1);
};

export default capitalize;
