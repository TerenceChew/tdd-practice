const checkInputValidity = (n1, n2) => {
  if (typeof n1 !== "number" || typeof n2 !== "number") return false;

  return true;
};

const calculator = {
  add(n1, n2) {
    const inputsAreValid = checkInputValidity(n1, n2);

    if (inputsAreValid) return Number(n1) + Number(n2);

    return "Inputs must be numbers only!";
  },
  subtract(n1, n2) {
    const inputsAreValid = checkInputValidity(n1, n2);

    if (inputsAreValid) return Number(n1) - Number(n2);

    return "Inputs must be numbers only!";
  },
  multiply(n1, n2) {
    const inputsAreValid = checkInputValidity(n1, n2);

    if (inputsAreValid) return Number(n1) * Number(n2);

    return "Inputs must be numbers only!";
  },
  divide(n1, n2) {
    const inputsAreValid = checkInputValidity(n1, n2);

    if (inputsAreValid) return Number(n1) / Number(n2);

    return "Inputs must be numbers only!";
  },
};

export default calculator;
