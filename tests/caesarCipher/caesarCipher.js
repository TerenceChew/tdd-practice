const checkInputsValidity = (str, num) => {
  if (typeof str !== "string" || typeof num !== "number") return false;

  return true;
};

const processKey = (key) => {
  const positiveKey = Math.abs(key);
  const processedKey = positiveKey > 26 ? positiveKey % 26 : positiveKey;

  return processedKey;
};

const isEnglishAlphabet = (char) => char.toUpperCase() !== char.toLowerCase();

const encryptChar = (str, processedKey) => (char, i) => {
  if (isEnglishAlphabet(char)) {
    const currCharCode = str.charCodeAt(i);
    const newCharCode = currCharCode + processedKey;
    const isUpperCase = currCharCode >= 65 && currCharCode <= 90;

    // 90 + 25 and 110 + 5 can both be 115
    // But we should not subtract 26 from 110 + 5
    if ((isUpperCase && newCharCode > 90) || newCharCode > 122)
      return String.fromCharCode(newCharCode - 26);

    return String.fromCharCode(newCharCode);
  }

  return char;
};

const decryptChar = (str, processedKey) => (char, i) => {
  if (isEnglishAlphabet(char)) {
    const currCharCode = str.charCodeAt(i);
    const newCharCode = currCharCode - processedKey;
    const isLowerCase = currCharCode >= 97 && currCharCode <= 122;

    if ((isLowerCase && newCharCode < 97) || newCharCode < 65)
      return String.fromCharCode(newCharCode + 26);

    return String.fromCharCode(newCharCode);
  }

  return char;
};

const encryptStr = (str, key) => {
  const areInputsValid = checkInputsValidity(str, key);

  if (!areInputsValid) return "Inputs must be a string and a number!";

  const processedKey = processKey(key);

  if (processedKey === 26 || processedKey === 0) return str;

  return str.split("").map(encryptChar(str, processedKey)).join("");
};

const decryptStr = (str, key) => {
  const areInputsValid = checkInputsValidity(str, key);

  if (!areInputsValid) return "Inputs must be a string and a number!";

  const processedKey = processKey(key);

  if (processedKey === 26 || processedKey === 0) return str;

  return str.split("").map(decryptChar(str, processedKey)).join("");
};

export { encryptStr, decryptStr };
