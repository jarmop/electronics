import { Bit } from "../types.ts";

export function sum(a: number, b: number) {
  return a + b;
}

export function binaryAdd(a: Bit[], b: Bit[]) {
}

function AND(a: Bit, b: Bit) {
  return a & b;
}

/**
 * For adding together binary numbers larger than one digit, you have to do it in parts, one digit at a time
 */
