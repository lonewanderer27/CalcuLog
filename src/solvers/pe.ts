import { computeError, parseRoundingChopping } from '.';

import { evaluate } from 'mathjs';
import { roundingchopping } from '../enums';

export default function pe(
  trueValString: string,
  roundingchopping: roundingchopping,
  numDigits: number
){
  const trueVal = evaluate(trueValString);
  const [approxVal] = parseRoundingChopping(trueVal, roundingchopping, numDigits);
  const [absoluteError, percentageRelativeError] = computeError(trueVal, approxVal)

  console.log("approxVal: ", approxVal)
  console.log("absoluteError: ", absoluteError)
  console.log("percentageRelativeError: ", percentageRelativeError)

  return {
    approxVal, 
    absoluteError, 
    percentageRelativeError
  }
}