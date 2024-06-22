import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import mango from './assets/mango.png'

function App() {

  return (
    <div className="App">
      <img src={mango} alt="logo" />
      <Counter />
    </div>
  )
}

export default App
