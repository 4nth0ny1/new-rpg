import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      turn: false,
      count: 0,
      message: 'no need to reshuffle',
      playerOneHealth: 1000,
      playerTwoHealth: 1000, 
      playerOneAttack: 0,
      playerTwoAttack: 0,
      playerOneDefense: 0, 
      playerTwoDefense: 0,
      cards: [
        { id: 7, name: 'rifle', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 8, name: 'revive 10 health', attack: Math.floor(Math.random() * 15), defense: 5  },
        { id: 9, name: 'forest base', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 10, name: 'spear', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 11, name: 'lightning spear', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 12, name: 'lightning sword', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 13, name: 'water blade', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 14, name: 'tiger style kung fu', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 15, name: 'base turrets', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
      ],
      player_one_hand: [
        { id: 1, name: 'pirate ship', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 2, name: 'bow', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 3, name: 'arrow', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
      ],
      player_two_hand: [
        { id: 4, name: 'mountain base', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 5, name: 'sword', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 6, name: 'shield', attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
      ],
      discards: []
    }
  }

  render(){

    let pOne = this.state.player_one_hand
    let pTwo = this.state.player_two_hand
    let cards = this.state.cards
    let disCards = this.state.discards
    let pOneHealth = this.state.playerOneHealth
    let pTwoHealth = this.state.playerTwoHealth
    let pTwoAttack = this.state.playerTwoAttack
    let pOneAttack = this.state.playerOneAttack
    let pTwoDefense = this.state.playerTwoDefense
    let pOneDefense = this.state.playerOneDefense

    const itCards = cards.map((k,v) => <div>{k.name}</div>)
    const itDiscards = disCards.map((k,v) => <div>{k.name}</div>)
      
    const itOne = pOne.map((k, v) => 
      <div>
        <p>Name: {k.name}</p>
        <p>Att: {k.attack}</p>
        <p>Def: {k.defense}</p>
        <br></br>
      </div>
    )

    const itTwo = pTwo.map((k, v) => 
      <div>
        <p>{k.name}</p>
        <p>Att: {k.attack}</p>
        <p>Def: {k.defense}</p>
        <br></br>
      </div>
    )

      /// --------------------------------------------
    /// --------------------------------------------
  /// --------------------------------------------


    //attack totals for player one and two
    const sum = pOne.map(att => att)
    const sumOneAttack = sum.reduce((accumulator, item) => {
      return accumulator + item.attack
    }, 0)

    const sumTwo = pTwo.map(att => att)
    const sumTwoAttack = sumTwo.reduce((accumulator, item) => {
      return accumulator + item.attack
    }, 0)

    //defense totals for player one and two
    const sumDef = pOne.map(att => att)
    const sumOneDefense = sumDef.reduce((accumulator, item) => {
      return accumulator + item.defense
    }, 0)

    const sumTwoDef = pTwo.map(att => att)
    const sumTwoDefense = sumTwoDef.reduce((accumulator, item) => {
      return accumulator + item.defense
    }, 0)

      /// --------------------------------------------
    /// --------------------------------------------
  /// --------------------------------------------


    const addCardandSwitchTurn = () => {

      let randomIndex = Math.floor(Math.random() * cards.length)
      let randomCard = cards[randomIndex]
      cards.splice(randomIndex, 1)

      if (this.state.turn === false && this.state.cards.length > 0){
        this.setState({
          turn: !this.state.turn,
          playerOneHealth: parseInt(pOneHealth + pOneDefense - pTwoAttack),
          player_one_hand: [...this.state.player_one_hand, randomCard],
          discards: [...this.state.discards, randomCard]
        })
      } else if (this.state.turn === true && this.state.cards.length > 0) {
        this.setState({
          turn: !this.state.turn,
          playerTwoHealth: parseInt(pTwoHealth + pTwoDefense - pOneAttack),
          player_two_hand: [...this.state.player_two_hand, randomCard],
          discards: [...this.state.discards, randomCard]
        })
      } else if (this.state.cards.length === 0) {
        this.setState({
          cards: [...this.state.discards, randomCard],
          discards: [{}],
          message: 'pick a card'
        })
      }
    }



    return (
      <>
        <p>Message: {this.state.message}</p>
        <button onClick={addCardandSwitchTurn}>draw card and attack</button>
        <div className="section-containers">
          <p className="player-one-hand">Player One {this.state.playerOneHealth} <br></br> My Turn: {!this.state.turn ? "true" : "false"} <br></br> Attack: {sumOneAttack} <br></br> Defense: {sumOneDefense} <br></br> {itOne} </p>
        </div>
        <div className="section-containers">
          <p>Game</p>
          <p>Cards: {itCards}</p>
          <p>Discards: {itDiscards}</p>
        </div>
        <div className="section-containers">
          <p className="player-two-hand">Player Two {this.state.playerTwoHealth} <br></br> My Turn: {this.state.turn ? "true" : "false"} <br></br> {this.state.playerTwoAttack} <br></br> Attack: {sumTwoAttack} <br></br> Defense: {sumTwoDefense} <br></br> {itTwo}</p>
        </div>
      </>
    )
  }
}
