import { Bit } from "../types.ts";

export function decToBin(dec: number) {
  return dec.toString(2).padStart(4, "0").split("").map((s) =>
    parseInt(s)
  ) as Bit[];
}

export function isEmptyRegister(reg: Bit[]) {
  return reg.every((b) => b === 0);
}
