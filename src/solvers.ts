import { roundingchopping } from "./enums"

/**
 * Rounds a given number to the specified number of decimal places.
 *
 * @param number - The number to round.
 * @param decimalPlaces - The number of decimal places to round the number to.
 * @returns The rounded number.
 */
const round = (number: number, decimalPlaces: number) => {
  // Calculate the factor of 10 to multiply by in order to round the number.
  const factorOfTen = Math.pow(10, decimalPlaces)

  // Multiply the number by the factor of 10, round to the nearest integer,
  // then divide by the factor of 10 to get the rounded value.
  return Math.round(number * factorOfTen) / factorOfTen
}


function truncate(number: number, digits: number): number {
  // Determine the number of decimal places in the number to be truncated
  const numDecimals = number.toString().split('.')[1]?.length ?? 0

  // If the number already has fewer or equal digits to the desired truncation,
  // return the original number since there's nothing to truncate
  if (numDecimals <= digits) {
    return number
  }

  // Calculate a "stepper" value that will be used to shift the decimal point of
  // the number to truncate it to the desired number of digits
  const stepper = 10 ** digits

  // Truncate the number to the desired number of digits by multiplying it by
  // the stepper value, rounding down to an integer using Math.trunc(), and then
  // dividing by the stepper value to shift the decimal point back
  return Math.trunc(number * stepper) / stepper
}


function parseRoundingChopping(value: number, roundorchop: roundingchopping, numDigits: number): number[] {
  if (roundorchop === roundingchopping.rounding) {
    return [round(value, numDigits), truncate(value, numDigits)]
  }
  else if (roundorchop === roundingchopping.chopping) {
    return [truncate(value, numDigits)]
  }
  else {
    return [round(value, numDigits)]
  }
}


/**
 * Computes the absolute error and percent relative error between a true value and an approximation.
 * @param trueVal The true value.
 * @param approxVal The approximation.
 * @returns An array containing the absolute error and percent relative error.
 */
export function computeError(trueVal: number, approxVal: number): number[] {
  // Compute the absolute error.
  const absoluteError = Math.abs(trueVal - approxVal)
  
  // Compute the percent relative error.
  const percentRelError = Math.abs(absoluteError / trueVal) * 100
  
  // Return an array containing the absolute error and percent relative error.
  return [absoluteError, percentRelError]  
}


/**
 * Calculates the natural logarithm of a given number using Taylor-Maclaurin series
 * @param xvar - the input number to calculate the logarithm of
 * @param nthDegree - the degree of the polynomial to approximate the logarithm
 * @returns the natural logarithm of the input number
 */
export function ln_taylormaclaurin(xvar: number, nthDegree: number): number {
  // Array to store the derivatives
  let dvs = []

  // Calculate the derivatives
  for (let cd = 1; cd < nthDegree+1; cd++) {
      if (cd === 1) {
          // First derivative is 1
          dvs.push(1)
      }
      else if (cd % 2 === 0) {
          const d: number = -((cd-1)*dvs[cd-2]/(0+1)**cd)
          dvs.push(d)
      }
      else if (cd % 2 !== 0) {
          const d: number = ((cd-1)*-dvs[cd-2]/(0+1)**cd)
          dvs.push(d)
      }
  }

  // Print the derivatives array
  console.log("derivatives: ", dvs)

  // Compute the true value of the natural logarithm
  let final_ans = 0
  const dlast = dvs.slice(-1)[0] // last derivative
  console.log("last derivative: ", dlast)

  // Calculate the polynomial approximation of the natural logarithm
  // ct = current term
  for (let ct = 1; ct < nthDegree+1; ct++){
      if (ct === 1) {
          // First term is the input number
          final_ans = xvar
      }
      else if (ct % 2 === 0) {
          // Even terms subtract from the sum
          final_ans -= (Math.pow(xvar, ct)) / ct 
      }
      else {
          // Odd terms add to the sum
          final_ans += (Math.pow(xvar, ct)) /ct
      }
      console.log(ct)
  }

  // Print the final approximation of the natural logarithm
  console.log("final_ans: ", final_ans)

  // Return the final approximation of the natural logarithm
  return final_ans
} 