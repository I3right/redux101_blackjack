import React, { Component } from "react";
import { connect } from 'react-redux';

import {DRAW_CARD,START_GAME,STOP} from '../../redux/actions/card.js'
import {dispatchCard} from '../../redux/actions/card.js'
import Modal from '../Modal'

import axios from "axios"
import Bet from "../Bet/index.jsx";
const URL = 'http://localhost:3001/api'

export class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputName:''
    }
  }

  handleInputChange = (event) =>{
    this.setState({inputName: event.target.value})
  }

  fetchingData = async (param) => {
    const {type, endPoint, userName} = param
      try {
        const response = await axios.post(`${URL + endPoint}`,{username: userName})
          // console.log(response);
          if(response.data) this.props.dispatchCard({type: type, payload: response.data}); 
        } 
      catch (error) {
          console.log('Error Dispatching',error);
    }
  }

  render() {
    const {result} = this.props;
    const startWord = 'Enter your name and click start button to play.';
    // console.log('game',result);
    // console.log(this.props)
    // console.log(Boolean(result))
    
    return (
      <>
        <div className='game-controler'>
          <header>
            <h1>Black Jack</h1>
            {/* <p>
              {result === '' ? '' : "Result: " }
              <span style={{
                color: result === '' ? 'gray'
                : result === 'None' ? 'blue'
                : result === 'Push' ? 'yellow'
                : result === 'Win' || result === 'Blackjack'? 'green' : 'red' }}>
                {result === ''? start : result === 'None'? 'Playing' : result}
              </span>
            </p> */}
            { result === '' && <p>{startWord}</p> }
          </header>

          <div className='input-group'>
            <input type='text' onChange={this.handleInputChange} value={this.state.inputName} placeholder="Enter your name here"/>
          </div>

          { result !== '' && <Bet/> }
          

          <div className='btn-group'>
            <button onClick={()=>this.fetchingData({type:START_GAME, endPoint:'/start', userName:this.state.inputName})}>Start</button>
            <button onClick={()=>this.fetchingData({type:DRAW_CARD, endPoint:'/hit', userName:this.state.inputName})}>Hit</button>        
            <button onClick={()=>this.fetchingData({type:STOP, endPoint:'/stand', userName:this.state.inputName})}>Stand</button>
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
