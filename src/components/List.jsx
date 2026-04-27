// ora creiamo questo componente List come CLASSE
// i componenti a classe hanno una struttura leggermente diversa:

import { Component } from 'react'

const first = 'Latte'
const second = 'Caffè'
const third = 'Croccantini'

class List extends Component {
  render() {
    // qui dentro ritornate il JSX
    return (
      <ul>
        <li>Pane</li>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
        <li>{this.props.item}</li>
      </ul>
    )
  }
}

export default List
