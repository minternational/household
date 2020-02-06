import React, { Component } from 'react'


class Input extends Component {
  constructor() {
    super()
    this.state = "0,00 €"
  }
  
  handleSubmit() {
    alert("Wurde hinzugefügt!")
  }

  render() {
    return (
      <form id="form" onSubmit={ this.handleSubmit } >
        <input id="artikel" type="text" name="Artikel" placeholder="Artikel eingeben" />
        <input id="betrag" type="number" name="Betrag" placeholder="Betrag eingeben" />
        <button id="submit">Hinzufügen</button>
      </form>
    )
  }
}


export default Input
