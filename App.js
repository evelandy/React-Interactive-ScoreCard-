import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {
  state = {
    players: [
      {
        name: "Player 1",
        score: 0,
        id: 1
      },
      {
        name: "Player 2",
        score: 0,
        id: 2
      },
      {
        name: "Player 3",
        score: 0,
        id: 3
      },
      {
        name: "Player 4",
        score: 0,
        id: 4
      }
    ]
  };

  //Player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players, // This merges the new player below with the previous players above
          {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1
        }]
      }
    });
  }

  /* YOU CAN ALSO USE THE CONCAT METHOD ON FUNCTIONS LIKE THE ONE ABOVE EX:
  handleAddPlayer = (name) => {
  let newPlayer = {
    name,
    score: 0,
    id: this.prevPlayerId += 1
  };
  this.setState( prevState => ({
    players: prevState.players.concat(newPlayer)
  }));
}
  */

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}


export default App;
