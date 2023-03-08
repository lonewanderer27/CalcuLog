import { KeyType } from "../../enums";

export const numKeys = [
  {value: "1", type: KeyType.number, latex: false},
  {value: "2", type: KeyType.number, latex: false},
  {value: "3", type: KeyType.number, latex: false},
  {value: "4", type: KeyType.number, latex: false},
  {value: "5", type: KeyType.number, latex: false},
  {value: "6", type: KeyType.number, latex: false},
  {value: "7", type: KeyType.number, latex: false},
  {value: "8", type: KeyType.number, latex: false},
  {value: "9", type: KeyType.number, latex: false},
  {value: ",", type: KeyType.number, latex: false},
  {value: "0", type: KeyType.number, latex: false},
  {value: ".", type: KeyType.number, latex: false},
]

export const specialKeys = [
  {value: "+", type: KeyType.letter, latex: false},
  {value: "-", type: KeyType.letter, latex: false},
  {value: "*", type: KeyType.letter, latex: false},
  {value: "/", type: KeyType.letter, latex: false},
  {value: "|", type: KeyType.letter, latex: false},
  {value: "(", type: KeyType.letter, latex: false},
  {value: ")", type: KeyType.letter, latex: false},
  {value: "[", type: KeyType.letter, latex: false},
  {value: "]", type: KeyType.letter, latex: false},
]

export const letterKeys = [
  {value: "\\log(x)", type: KeyType.special, latex: true},
  {value: "\\ln(x+1)", type: KeyType.special, latex: true},
  {value: "\\sqrt{x}", type: KeyType.special, latex: true},
  {value: "\\sqrt[x]{y}", type: KeyType.special, latex: true},
  {value: "\\frac{x}{y}", type: KeyType.special, latex: true},
  {value: "{x}\\frac{y}{z}", type: KeyType.special, latex: true},
  {value: "x^{y}", type: KeyType.special, latex: true},
  {value: "x_y", type: KeyType.special, latex: true},
]

// export const secondSpecial  = [
//   {value: "f'(x)", type: KeyType.secondspecial, latex: false},
//   {value: "f''(x)", type: KeyType.secondspecial, latex: false},
//   {value: "f^{(k)}(x)", type: KeyType.secondspecial, latex: false},
//   {value: "\\int", type: KeyType.secondspecial, latex: false},
//   {value: "\\int_{a}^b f(x)dx", type: KeyType.secondspecial, latex: false},
//   {value: "\\iint", type: KeyType.secondspecial, latex: false},
//   {value: "\\lim_{x \to +\infty} f(x)", type: KeyType.secondspecial, latex: false},
// ]