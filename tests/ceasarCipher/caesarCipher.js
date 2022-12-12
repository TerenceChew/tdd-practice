const caesarCipher = {
  encrypt(str, key) {
    const positiveKey = Math.abs(key);
    const processedKey = positiveKey > 26 ? positiveKey % 26 : positiveKey;

    if (processedKey === 26 || processedKey === 0) return str;

    return str
      .split("")
      .map((char, i) => {
        if (char.toUpperCase() !== char.toLowerCase()) {
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
      })
      .join("");
  },
  decrypt(str, key) {
    const positiveKey = Math.abs(key);
    const processedKey = positiveKey > 26 ? positiveKey % 26 : positiveKey;

    if (processedKey === 26 || processedKey === 0) return str;

    return str
      .split("")
      .map((char, i) => {
        if (char.toUpperCase() !== char.toLowerCase()) {
          const currCharCode = str.charCodeAt(i);
          const newCharCode = currCharCode - processedKey;
          const isLowerCase = currCharCode >= 97 && currCharCode <= 122;

          if ((isLowerCase && newCharCode < 97) || newCharCode < 65)
            return String.fromCharCode(newCharCode + 26);

          return String.fromCharCode(newCharCode);
        }

        return char;
      })
      .join("");
  },
};

export default caesarCipher;
