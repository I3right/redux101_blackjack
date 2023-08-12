import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Appclass.css'

import Game from './components/Game';
import Player from './components/Player';
import Dealer from './components/Dealer';

class AppClass extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <div>
            <Game/>
            {this.props.result!=='' &&
              <div className='game-status'>
                <Player/>
                <Dealer/>
              </div>
            }
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  result: state.cards.result,
});

export default connect(mapStateToProps)(AppClass);