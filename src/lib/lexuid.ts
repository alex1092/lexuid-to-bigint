export const LEXUID_ALPHABET = "123456789ABCDEFGHJKMNPQRSTUVWXYZ";

export const LEXUID_BASE = BigInt(LEXUID_ALPHABET.length);

export function lexuidToString(value: bigint): string {
  let result = "";
  let n = value;

  while (n > BigInt(0)) {
    const remainder = Number(n % LEXUID_BASE);
    result = LEXUID_ALPHABET[remainder] + result;
    n = n / LEXUID_BASE;
  }

  result = result.padStart(13, LEXUID_ALPHABET[0]);
  return `${result.slice(0, 4)}-${result.slice(4, 9)}-${result.slice(9, 13)}`;
}

export function stringToLexuid(str: string): bigint {
  const clean = str.replace(/-/g, "");
  let result = BigInt(0);
  for (const char of clean) {
    const value = LEXUID_ALPHABET.indexOf(char);
    result = result * LEXUID_BASE + BigInt(value);
  }

  return result;
}
