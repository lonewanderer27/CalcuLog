import { PEprops, PEvaluesValidity, TMprops, TMvaluesValidity } from "./types";

export function checkPEVals(PEvalues: PEprops): PEvaluesValidity {
  let inputValidity = {
    numDigits: true,
    trueValue: true,
    nthDegree: true,
  } 
  if (PEvalues.numDigits < 0) {
    inputValidity.numDigits = false;
  } 

  if (PEvalues.trueValue.length === 0 || 
      PEvalues.trueValue === "" || 
      PEvalues.trueValue.includes("x") ||
      PEvalues.trueValue.includes("y") || 
      PEvalues.trueValue.includes("z")) 
  {
    inputValidity.trueValue = false;
  }
  return inputValidity
}

export function checkTMVals(TMvalues: TMprops): TMvaluesValidity {
  let inputValidity = {
    numDigits: true,
    nthDegree: true,
    xvar: true,
  }

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