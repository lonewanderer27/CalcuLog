import './App.css'

import { PEprops, PEvaluesValidity, TMprops, TMvaluesValidity, defaultPEValidity, defaultTMValidity } from './types';
import { checkPEVals, checkTMVals } from './checkers';
import { markEnums, roundingchopping } from './enums';

import Header from './components/Header';
import PEInput from './components/Inputs/PEInput';
import PESolution from './components/Solutions/PESolution';
import TMInput from './components/Inputs/TMInput';
import TMSolution from './components/Solutions/TMSolution';
import { useState } from 'react'

function App() {
  const [screen, setScreen] = useState(() => markEnums.idle)

  const ansPE = () => {
    setScreen(() => markEnums.peAns);
  };
  const ansTM = () => {
    setScreen(() => markEnums.tmAns);
  };
  const ansIdle = () => setScreen(() => markEnums.idle);

  const defaultPEVals = {
    trueValue: "",
    approxValue: "",
    roundingchopping: roundingchopping.rounding,
    numDigits: 0,
  }

  const defaultTMVals = {
      nthDegree: 1,
      xvar: 1,
      numDigits: 0,
  }

  const [PEvalues, setPEValues] = useState<PEprops>(() => defaultPEVals);
	const [TMvalues, setTMValues] = useState<TMprops>(() => defaultTMVals);
  const [PEvaluesValid, setPEValuesValid] = useState<PEvaluesValidity>(() => defaultPEValidity);
  const [TMvaluesValid, setTMValuesValid] = useState<TMvaluesValidity>(() => defaultTMValidity);

  const handlePEChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    console.log(e)
    setPEValues((prev) => {
      const newState = {
        ...prev,
        [e.target.name]: e.target.value,
      }
      setPEValuesValid(checkPEVals(newState))
      return newState;
    })
  }

  const handleTMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    setTMValues((prev) => {
      const newState = {
        ...prev,
        [e.target.name]: e.target.value
      }
      setTMValuesValid(checkTMVals(newState))
      return newState;
    })
  }

  const clearInputs = (screen: markEnums) => {
    if (screen === markEnums.pe) {
      setPEValues(() => defaultPEVals);
      setPEValuesValid(() => checkPEVals(defaultPEVals));
    } else if (screen === markEnums.tm) {
      setTMValues(() => defaultTMVals);
      setTMValuesValid(() => checkTMVals(defaultTMVals));
    }
  }

  console.table(PEvalues)
  console.table(TMvalues)
  console.log("PEvaluesValid")
  console.table(PEvaluesValid)
  console.log("TMvaluesValid")
  console.table(TMvaluesValid)
  console.log("screen: ", screen)

  return (
    <div className="App container d-flex flex-column justify-content-between">
      <div className="row">
      <Header/>
      </div>
      <div className="row p-0 p-sm-4">
        {(screen === markEnums.idle || screen === markEnums.pe || screen === markEnums.peAns) && 
        <PEInput 
          clearInputs={clearInputs} 
          screen={screen} 
          ansPE={ansPE} 
          ansIdle={ansIdle} 
          handlePEChange={handlePEChange}
          PEvaluesValidity={PEvaluesValid}
          {...PEvalues} 
        />}
        {(screen === markEnums.peAns) && 
        <PESolution 
        
        />}
        {(screen === markEnums.idle || screen === markEnums.tm || screen === markEnums.tmAns) && 
        <TMInput 
          clearInputs={clearInputs} 
          screen={screen} 
          ansTM={ansTM} 
          ansIdle={ansIdle} 
          handleTMChange={handleTMChange}
          TMvaluesValidity={TMvaluesValid}
          {...TMvalues} 
        />}
        {(screen === markEnums.tmAns) && 
        <TMSolution 
        
        />}
      </div>
      <div className="row">
        <Keyboard/>
      </div>
    </div>
  )
}

function Keyboard() {
  return (
    <div className="keyboard text-center pt-2">
      <h2>Click to open keyboard</h2>
    </div>
  )
}

export default App
