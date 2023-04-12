import { PEprops, PEvaluesValidity, TMprops, TMvaluesValidity, defaultPEValidity, defaultTMValidity } from "./types";

import { evaluate } from "mathjs";

export function checkPEVals(PEvalues: PEprops): PEvaluesValidity {
  let inputValidity = {
    numDigits: true,
    trueValue: true,
    nthDegree: true,
  };
  
  if (PEvalues.numDigits < 0) {
    inputValidity.numDigits = false;
  } 

  if (PEvalues.trueValue.length === 0) {
    inputValidity.trueValue = false
  }

  console.log("evaluating true value in PE")
  try {
    evaluate(PEvalues.trueValue)
  } catch {
    inputValidity.trueValue = false
    console.log("Invalid true value in Propagation Error")
  }

  return inputValidity
}

export function checkTMVals(TMvalues: TMprops): TMvaluesValidity {
  let inputValidity = {
    numDigits: true,
    nthDegree: true,
    xvar: true,
  };

  if (TMvalues.nthDegree < 1){
    inputValidity.nthDegree = false;
  }

  if (TMvalues.numDigits < 0){
    inputValidity.numDigits = false;
  }

  if (TMvalues.xvar <= 0){
    inputValidity.xvar = false;
  }

  return inputValidity;
}