import './App.css'

import Header from './components/Header';
import PEAnswer from './components/Screens/PEAnswer';
import TMAnswer from './components/Screens/TMAnswer';
import { useState } from 'react'

function App() {

  return (
    <div className="App container">
      <div className="row">
      <Header/>
      </div>
      <div className="row p-0 p-sm-4">
        <PEAnswer/>
        <TMAnswer/>
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
