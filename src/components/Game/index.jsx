import React, { Component } from "react";
import { connect } from 'react-redux';

import {GET_START_GAME, GET_DRAW_CARD, GET_END_GAME } from '../../redux/actions/card.js'
import {dispatchCard} from '../../redux/actions/card.js'
import Modal from '../Modal'
import Bet from "../Bet/index.jsx";

export class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:''
    }
  }

  handleInputChange = (event) =>{
    this.setState({username: event.target.value})
  }

  render() {
    const {result} = this.props;
    const startWord = 'Enter your name and click start button to play.';
    
    return (
      <>
        <div className='game-controler'>
          <header>
            <h1>Black Jack</h1>
            { result === '' && <p>{startWord}</p> }
          </header>

          <div className='input-group'>
            <input type='text' onChange={this.handleInputChange} value={this.state.username} placeholder="Enter your name here"/>
          </div>

          { result !== '' && <Bet/> }
          
          <div className='btn-group'>
            <button onClick={()=>this.props.dispatchCard({ type:GET_START_GAME, payload:this.state.username })}>Start</button>
            <button onClick={()=>this.props.dispatchCard({ type:GET_DRAW_CARD })}>Hit</button>        
            <button onClick={()=>this.props.dispatchCard({ type:GET_END_GAME })}>Stand</button>
          </div>

          {!(result === 'None'|| result === '') && <Modal word={result}/>}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  result: state.cards.result,
});

const mapDispatchToPorp = {
  dispatchCard
}

export default connect(mapStateToProps,mapDispatchToPorp)(index);
