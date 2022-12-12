import caesarCipher from "./caesarCipher";

const { encrypt, decrypt } = caesarCipher;

// Encrypt
test("Encrypt", () => {
  expect(encrypt("Hello World!", 2)).toBe("Jgnnq Yqtnf!");
});

test("Encrypt", () => {
  expect(encrypt("Terence 1997 wsc@gmail.com", 14)).toBe(
    "Hsfsbqs 1997 kgq@uaowz.qca"
  );
});

test("Encrypt", () => {
  expect(encrypt("Hello World! 123", 20)).toBe("Byffi Qilfx! 123");
});

test("Encrypt", () => {
  expect(encrypt("Hello World! 100", 26)).toBe("Hello World! 100");
});

test("Encrypt", () => {
  expect(encrypt("Hello World!", 28)).toBe("Jgnnq Yqtnf!");
});

test("Encrypt", () => {
  expect(encrypt("Hello World!", 100)).toBe("Dahhk Sknhz!");
});

// Decrypt
test("Decrypt", () => {
  expect(decrypt("Jgnnq Yqtnf!", 2)).toBe("Hello World!");
});

test("Decrypt", () => {
  expect(decrypt("Hsfsbqs 1997 kgq@uaowz.qca", 14)).toBe(
    "Terence 1997 wsc@gmail.com"
  );
});

test("Decrypt", () => {
  expect(decrypt("Byffi Qilfx! 123", 20)).toBe("Hello World! 123");
});

test("Decrypt", () => {
  expect(decrypt("Hello World! 123", 26)).toBe("Hello World! 123");
});

test("Decrypt", () => {
  expect(decrypt("Jgnnq Yqtnf!", 28)).toBe("Hello World!");
});

test("Decrypt", () => {
  expect(decrypt("Dahhk Sknhz!", 100)).toBe("Hello World!");
});

// Error handling
test("Two strings as inputs", () => {
  expect(encrypt("Hello World!", "100")).toBe(
    "Inputs must be a string and a number!"
  );
});

test("Two numbers as inputs", () => {
  expect(decrypt(100, 100)).toBe("Inputs must be a string and a number!");
});

test("A number & a string as inputs", () => {
  expect(decrypt(100, "Hello")).toBe("Inputs must be a string and a number!");
});
