import './App.scss'
import Header from './Header'
import Keyboard from './Keyboard'
import PropagationError from './PropagationError'
import TaylorMaclaurin from './TaylorMaclaurin'

function App() {
  return (
    <div className="App">
      <Header/>
      <PropagationError/>
      <TaylorMaclaurin/>
      <Keyboard/>
    </div>
  )
}

export default App
