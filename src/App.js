import React from 'react'
import './App.css'
import Input from './components/Input'
import Expense from './components/Expense'


function App() {
  
  return (
    <div className="App">
      <h2>Haushaltsbuch</h2>
      <Input />
      <Expense />
    </div>
  )
}

console.log("Bis jetzt ist alles okay!")

export default App
