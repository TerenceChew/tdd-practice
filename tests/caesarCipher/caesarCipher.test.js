import { encryptStr, decryptStr } from "./caesarCipher";

// Encrypt
test("Encrypt with key 2, shift by 2", () => {
  expect(encryptStr("Hello World!", 2)).toBe("Jgnnq Yqtnf!");
});

test("Encrypt with key 14, shift by 14", () => {
  expect(encryptStr("Terence 1997 wsc@gmail.com", 14)).toBe(
    "Hsfsbqs 1997 kgq@uaowz.qca"
  );
});

test("Encrypt with key 20, shift by 20", () => {
  expect(encryptStr("Hello World! 123", 20)).toBe("Byffi Qilfx! 123");
});

test("Encrypt with key 26, should return string unchanged", () => {
  expect(encryptStr("Hello World! 100", 26)).toBe("Hello World! 100");
});

test("Encrypt with key 0, should return string unchanged", () => {
  expect(encryptStr("Hello World! 100", 0)).toBe("Hello World! 100");
});

test("Encrypt with key 28, mod key with 26, and shift by remainder", () => {
  expect(encryptStr("Hello World!", 28)).toBe("Jgnnq Yqtnf!");
});

test("Encrypt with key 100, mod key with 26, and shift by remainder", () => {
  expect(encryptStr("Hello World!", 100)).toBe("Dahhk Sknhz!");
});

// Decrypt
test("Decrypt with key 2, shift by 2", () => {
  expect(decryptStr("Jgnnq Yqtnf!", 2)).toBe("Hello World!");
});

test("Decrypt with key 14, shift by 14", () => {
  expect(decryptStr("Hsfsbqs 1997 kgq@uaowz.qca", 14)).toBe(
    "Terence 1997 wsc@gmail.com"
  );
});

test("Decrypt with key 20, shift by 20", () => {
  expect(decryptStr("Byffi Qilfx! 123", 20)).toBe("Hello World! 123");
});

test("Decrypt with key 26, should return string unchanged", () => {
  expect(decryptStr("Hello World! 123", 26)).toBe("Hello World! 123");
});

test("Decrypt with key 0, should return string unchanged", () => {
  expect(decryptStr("Hello World! 123", 0)).toBe("Hello World! 123");
});

test("Decrypt with key 28, mod key with 26, and shift by remainder", () => {
  expect(decryptStr("Jgnnq Yqtnf!", 28)).toBe("Hello World!");
});

test("Decrypt with key 100, mod key with 26, and shift by remainder", () => {
  expect(decryptStr("Dahhk Sknhz!", 100)).toBe("Hello World!");
});

// Error handling
test("Two strings as inputs should not work", () => {
  expect(encryptStr("Hello World!", "100")).toBe(
    "Inputs must be a string and a number!"
  );
});

test("Two numbers as inputs should not work", () => {
  expect(decryptStr(100, 100)).toBe("Inputs must be a string and a number!");
});

test("A number & a string as inputs should not work", () => {
  expect(decryptStr(100, "Hello")).toBe(
    "Inputs must be a string and a number!"
  );
});
