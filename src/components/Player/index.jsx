import React, { Component } from "react";
import { connect } from 'react-redux';
import Cards from '../Cards'

export class Player extends Component {
  render() {
    const {player} = this.props

    return (
      <div className="player">
        <div className="title">
              <strong>{player.username}</strong>
              , Score: <span className="score"> {player.score}</span>
        </div>

        <Cards cards={player.cards} name='player'/>
      </div>
        
    );
  }
}

const mapStateToProps = (state) => {
  return {player: state.cards.player}
};

export default connect(mapStateToProps)(Player);
