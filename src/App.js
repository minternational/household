import React from 'react';
import './App.css';
import MoneyInput from './components/MoneyInput'
import TextInput from './components/TextInput'
import Content from './components/Content'
import Sum from './components/Sum'
import Submit from './components/Submit'


function App() {
  
  return (
    <div className="App">
      <h2>Haushaltsbuch</h2>
      <Sum />
      <MoneyInput />
      <TextInput />
      <Submit />
      <br />
      <Content />
    </div>
  );
}


export default App;
