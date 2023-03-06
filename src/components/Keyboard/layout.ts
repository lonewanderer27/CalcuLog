import { KeyType } from "../../enums";

export const numKeys = [
  {value: "1", type: KeyType.number},
  {value: "2", type: KeyType.number},
  {value: "3", type: KeyType.number},
  {value: "4", type: KeyType.number},
  {value: "5", type: KeyType.number},
  {value: "6", type: KeyType.number},
  {value: "7", type: KeyType.number},
  {value: "8", type: KeyType.number},
  {value: "9", type: KeyType.number},
  {value: ",", type: KeyType.number},
  {value: "0", type: KeyType.number},
  {value: ".", type: KeyType.number},
]

export const letterKeys = [
  {value: "a", type: KeyType.letter},
  {value: "b", type: KeyType.letter},
  {value: "c", type: KeyType.letter},
  {value: "x", type: KeyType.letter},
  {value: "y", type: KeyType.letter},
  {value: "z", type: KeyType.letter},
  {value: "(", type: KeyType.letter},
  {value: "|", type: KeyType.letter},
  {value: ")", type: KeyType.letter},
  {value: "[", type: KeyType.letter},
  {value: "]", type: KeyType.letter},
  {value: "\%", type: KeyType.letter},
]

export const specialKeys = [
  {value: "\\pi", type: KeyType.special},
  {value: "\\log", type: KeyType.special},
  {value: "\\log_{x}", type: KeyType.special},
  {value: "\\ln", type: KeyType.special},
  {value: "\\sqrt{x}", type: KeyType.special},
  {value: "\\sqrt[x]{y}", type: KeyType.special},
  {value: "f(x)", type: KeyType.special},
  {value: "\\frac{x}{y}", type: KeyType.special},
  {value: "{x}\\frac{y}{z}", type: KeyType.special},
  {value: "x^{y}", type: KeyType.special},
  {value: "x_y", type: KeyType.special},
]