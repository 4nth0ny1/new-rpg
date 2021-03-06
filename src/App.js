import React from 'react';
import BaseContainer from './components/BaseContainer';
import Card from './components/Card'
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      turn: false,
      drewCard: false,
      count: 0,
      message: ' ',
      playerOneHealth: 100,
      playerTwoHealth: 100, 
      playerOneAttack: 0,
      playerTwoAttack: 0,
      playerOneDefense: 0, 
      playerTwoDefense: 0,
      playerOneCardContainers: [[], [], []],
      playerTwoCardContainers: [[], [], []],
      cards: [
        { id: 7, type: 'weapon', name: 'rifle', image: "https://images.unsplash.com/photo-1525779350160-30931cbc2aac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJpZmxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 8, type: 'weapon', name: 'medkit', image: "https://images.unsplash.com/photo-1563260324-5ebeedc8af7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZCUyMGtpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: 5  },
        { id: 9, type: 'base', name: 'forest base', image: "https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0JTIwYmFzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 10, type: 'weapon', name: 'spear', image: "https://images.unsplash.com/photo-1628329752902-cf567df10ed0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BlYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 11, type: 'weapon', name: 'lightning', image: "https://images.unsplash.com/photo-1429552077091-836152271555?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHRuaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 12, type: 'weapon', name: 'kitana', image: "https://images.unsplash.com/photo-1583684977172-528983104c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3dvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 13, type: 'weapon', name: 'water blade', image: "https://images.unsplash.com/photo-1620747918456-6db88fea1e84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dvcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 14, type: 'weapon', name: 'kung fu', image: "https://images.unsplash.com/photo-1526889588514-2e695856df85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3VuZyUyMGZ1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 15, type: 'base', name: 'bunker', image: "https://images.unsplash.com/photo-1561915682-73e804282c58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVua2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
      ],
      player_one_hand: [
        { id: 1, type: 'base', name: 'pirate ship', image: "https://images.unsplash.com/photo-1590880449155-b54f958ce314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGlyYXRlJTIwc2hpcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 2, type: 'weapon', name: 'bow', image: "https://images.unsplash.com/photo-1562008752-2459495a0c05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym93JTIwYW5kJTIwYXJyb3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 3, type: 'weapon', name: 'laser', image: "https://images.unsplash.com/photo-1481241857164-e8483bce922d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGF6ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
      ],
      player_two_hand: [
        { id: 4, type: 'base', name: 'mountain', image: "https://images.unsplash.com/photo-1570793005386-840846445fed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBodXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 5, name: 'excalibur', image: "https://images.unsplash.com/photo-1440711085503-89d8ec455791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
        { id: 6, name: 'shield', image: "https://images.unsplash.com/photo-1561156772-a44477f220a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hpZWxkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", attack: Math.floor(Math.random() * 15), defense: Math.floor(Math.random() * 10)  },
      ],
      discards: []
    }
  }

  render(){

    let pOne = this.state.player_one_hand
    let pTwo = this.state.player_two_hand
    let cards = this.state.cards
    // let disCards = this.state.discards
    let pOneHealth = this.state.playerOneHealth
    let pTwoHealth = this.state.playerTwoHealth

    // const itCards = cards.map((k,v) => <div>{k.name}</div>)
    // const itDiscards = disCards.map((k,v) => <div>{k.name}</div>)
      

    const addToCardContainer = (card, player) => {

      if (player === 1){
        if (this.state.playerOneCardContainers[0].length === 0 && card.type !== 'base' ){
          return 
        }
        this.setState({
          playerOneCardContainers: [[card, ...this.state.playerOneCardContainers[0]], [], []], 
          player_one_hand: [...this.state.player_one_hand.filter(cardInHand => cardInHand.id !== card.id)]
        })
      } else {
        if (this.state.playerTwoCardContainers[0].length === 0 && card.type !== 'base' ){
          return 
        }
        this.setState({
          playerTwoCardContainers: [[card, ...this.state.playerTwoCardContainers[0]], [], []], 
          player_two_hand: [...this.state.player_two_hand.filter(cardInHand => cardInHand.id !== card.id)]
        })
      }
    }

    const itOne = pOne.map((card) => 
      <Card key={card.id} card={card} player={1} addToCardContainer={addToCardContainer} />
    )

    const itTwo = pTwo.map((card) => 
      <Card key={card.id} card={card} player={2} addToCardContainer={addToCardContainer} />
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

    const checkWin = () => {
      
      if (this.state.playerOneHealth < 0 || this.state.playerTwoHealth < 0) {
        if (this.state.playerOneHealth > this.state.playerTwoHealth) {
          this.setState({
            message: 'Player One Won'
          })
        } else {
          this.setState({
            message: 'Player Two Won'
          })
        }
      }
    }

      /// --------------------------------------------
    /// --------------------------------------------
  /// --------------------------------------------

    // const addCardandSwitchTurn = () => {

    //   let randomIndex = Math.floor(Math.random() * cards.length)
    //   let randomCard = cards[randomIndex]
    //   cards.splice(randomIndex, 1)

    //   if (this.state.turn === false && this.state.cards.length > 0){
    //     this.setState({
    //       turn: !this.state.turn,
    //       playerOneHealth: pOneHealth + sumOneDefense - sumTwoAttack,
    //       player_one_hand: [...this.state.player_one_hand, randomCard],
    //       discards: [...this.state.discards, randomCard]
    //     }, checkWin)
    //   } else if (this.state.turn === true && this.state.cards.length > 0) {
    //     this.setState({
    //       turn: !this.state.turn,
    //       playerTwoHealth: pTwoHealth + sumTwoDefense - sumOneAttack,
    //       player_two_hand: [...this.state.player_two_hand, randomCard],
    //       discards: [...this.state.discards, randomCard]
    //     }, checkWin)
    //   } else if (this.state.cards.length === 0) {
    //     this.setState({
    //       cards: [...this.state.discards, randomCard],
    //       discards: [{}]
    //     }, checkWin)
    //   }

    // }

    const drawCard = () => {
      let randomIndex = Math.floor(Math.random() * cards.length)
      let randomCard = cards[randomIndex]
      cards.splice(randomIndex, 1)

      if (this.state.turn){
        this.setState({
          player_two_hand: [...this.state.player_two_hand, randomCard],
          discards: [...this.state.discards, randomCard],
          drewCard: true
        })
      } else {
        this.setState({
          player_one_hand: [...this.state.player_one_hand, randomCard],
          discards: [...this.state.discards, randomCard],
          drewCard: true
        })
      }
    }

    const endTurn = () => {
      this.setState({
        drewCard: false, 
        turn: !this.state.turn
      })
    }

    return (
      <>
        <div className="board">
          <div className='player-container top'>
            <div className='player-id'>
              { (!this.state.drewCard && !this.state.turn) && <button onClick={drawCard}>draw card</button> }
              { ( this.state.drewCard && !this.state.turn ) && <button onClick={endTurn}>End Turn</button> }
              <h1>Player One</h1>
              <p>Health: {this.state.playerOneHealth}</p>
              <p>{!this.state.turn ? "My Turn" : " "}</p>
              <p>Attack: {sumOneAttack}</p>
              <p>Defense: {sumOneDefense}</p>
            </div>
            <div className="hand">{itOne}</div>
          </div>
          <div className="game-board">
              {/* <button onClick={addCardandSwitchTurn}>draw card and attack</button> */}
              <div className="player-game-cards">
                {this.state.playerOneCardContainers.map(cardContainer => <BaseContainer cardContainer={cardContainer}/> )}
              </div>
              <div className="player-game-cards">
                {this.state.playerTwoCardContainers.map(cardContainer => <BaseContainer cardContainer={cardContainer} /> )}
              </div>
              {this.state.message}
          </div>
          <div className='player-container bottom'>
            <div className="hand">{itTwo}</div>
            <div className='player-id'>
              { (!this.state.drewCard && this.state.turn) && <button onClick={drawCard}>draw card</button> }
              { ( this.state.drewCard && this.state.turn ) &&<button onClick={endTurn}>End Turn</button> }
              <h1>Player Two</h1>
              <p>Health: {this.state.playerTwoHealth}</p>
              <p>{this.state.turn ? "My Turn" : " "}</p>
              <p>Attack: {sumTwoAttack}</p>
              <p>Defense: {sumTwoDefense}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
