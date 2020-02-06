import React from 'react';
import '../App.css'


function Sum() {
  
  const sum = "1000,00€"

  return (
    <div className="Sum">
      <p>Aktueller Betrag:</p>
      <h2>{ sum }</h2>
    </div>
  );
}


export default Sum;
