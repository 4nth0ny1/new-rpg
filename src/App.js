import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      turn: false,
      cards: [
        {
          id: 7, 
          name: 'rifle'
        },
        {
          id: 8, 
          name: 'revive 10 health'
        },
        {
          id: 9, 
          name: 'forest base'
        },
        {
          id: 10, 
          name: 'spear'
        },
      ],
      player_one_hand: [
        {
          id: 1, 
          name: 'pirate ship'
        },
        {
          id: 2, 
          name: 'bow'
        },
        {
          id: 3, 
          name: 'arrow'
        }
      ],
      player_two_hand: [
        {
          id: 4, 
          name: 'mountain base'
        },
        {
          id: 5, 
          name: 'sword'
        },
        {
          id: 6, 
          name: 'shield'
        }
      ]
    }
  }

  render(){

    const addCardSwitchTurn = () => {
        let playerOneHand = this.state.player_one_hand
        let playerTwoHand = this.state.player_two_hand
        let cardsVar = this.state.cards

        if (this.state.turn === false){
          this.setState({
            turn: !this.state.turn,
            player_one_hand: [playerOneHand, cardsVar[Math.random(Math.floor() * cardsVar.length)]]
          })
        } else {
          this.setState({
            turn: !this.state.turn,
            player_two_hand: [playerTwoHand, cardsVar[Math.random(Math.floor() * cardsVar.length)]]
          })
        }
    }

    return (
      <>
        <button onClick={addCardSwitchTurn}>click me</button>
        {this.state.player_one_hand}
        {this.state.player_two_hand}
      </>
    )
  }

}


