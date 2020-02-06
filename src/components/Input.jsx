import React from 'react';


function Input() {
  
  return (
    <form id="form">
      <input id="artikel" type="text" name="Artikel" placeholder="Artikel eingeben" />
      <input id="betrag" type="number" name="Betrag" placeholder="Betrag eingeben" />
      <button id="submit">Hinzufügen</button>
    </form>
  );
}


export default Input;
