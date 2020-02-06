import React from 'react'
import './App.css'
import Input from './components/Input'
import Expense from './components/Expense'
import Sum from './components/Sum'


function App() {
  
  return (
    <div className="App">
      <h2>Haushaltsbuch</h2>
      <Sum />
      <Input />
      <br />
      <Expense />
    </div>
  )
}

console.log("Bis jetzt ist alles okay!")

export default App
