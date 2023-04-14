import './App.css'

import { PEAnsprops, PEinputsValidity, PEprops, TMAnsprops, TMinputsValidity, TMprops, defaultPEValidity, defaultTMValidity } from './types';
import { checkPEVals, checkTMVals } from './checkers';
import { defaultPEAns, defaultPEVals, defaultTMAns, defaultTMVals } from './constants';
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

  const [PEinputs, setPEInputs] = useState<PEprops>(() => defaultPEVals);
	const [TMinputs, setTMInputs] = useState<TMprops>(() => defaultTMVals);
  const [PEinputsValid, setPEInputsValid] = useState<PEinputsValidity>(() => defaultPEValidity);
  const [TMinputsValid, setTMInputsValid] = useState<TMinputsValidity>(() => defaultTMValidity);

  const [PEanswers, setPEanswers] = useState<PEAnsprops>(() => defaultPEAns);
  const [TManswers, setTManswers] = useState<TMAnsprops>(() => defaultTMAns);

  const handlePEChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    console.log(e)
    setPEInputs((prev) => {
      const newState = {
        ...prev,
        [e.target.name]: e.target.value,
      }
      setPEInputsValid(checkPEVals(newState))
      return newState;
    })
  }

  const handleTMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    setTMInputs((prev) => {
      const newState = {
        ...prev,
        [e.target.name]: e.target.value
      }
      setTMInputsValid(checkTMVals(newState))
      return newState;
    })
  }

  const clearInputs = (screen: markEnums) => {
    if (screen === markEnums.pe) {
      setPEInputs(() => defaultPEVals);
      setPEInputsValid(() => checkPEVals(defaultPEVals));
    } else if (screen === markEnums.tm) {
      setTMInputs(() => defaultTMVals);
      setTMInputsValid(() => checkTMVals(defaultTMVals));
    }
  }

  console.table(PEinputs)
  console.table(TMinputs)
  console.log("PEvaluesValid")
  console.table(PEinputsValid)
  console.log("TMvaluesValid")
  console.table(TMinputsValid)
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
          PEvaluesValidity={PEinputsValid}
          {...PEinputs} 
        />}
        {(screen === markEnums.peAns) && 
        <PESolution 
          {...PEanswers}
        />}
        {(screen === markEnums.idle || screen === markEnums.tm || screen === markEnums.tmAns) && 
        <TMInput 
          clearInputs={clearInputs} 
          screen={screen} 
          ansTM={ansTM} 
          ansIdle={ansIdle} 
          handleTMChange={handleTMChange}
          TMvaluesValidity={TMinputsValid}
          {...TMinputs} 
        />}
        {(screen === markEnums.tmAns) && 
        <TMSolution 
          {...TManswers}
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
