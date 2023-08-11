import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DRAW_CARD,START_GAME,STOP} from './redux/actions/card'
import {dispatchCard} from './redux/actions/card'

import axios from "axios"
const URL = 'http://localhost:3001/api'

class AppClass extends Component {
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
          console.log(response);
          this.props.dispatchCard({type: type, payload: response.data}); 
        } 
      catch (error) {
          console.log('Error Dispatching',error);
    }
  }

  render() {
    return (
      <>
        <div className='result-group'>
          <h1>Black Jack</h1>
          <p>Result: NONE</p>
        </div>

        <div className='input-group'>
          <input type='text' onChange={this.handleInputChange} value={this.state.inputName}/>
        </div>

        <div className='btn-group'>
          <button onClick={()=>this.fetchingData({type:START_GAME, endPoint:'/start', userName:this.state.inputName})}>Start</button>
          <button onClick={()=>this.fetchingData({type:DRAW_CARD, endPoint:'/hit', userName:this.state.inputName})}>Hit</button>        
          <button onClick={()=>this.fetchingData({type:STOP, endPoint:'/stand', userName:this.state.inputName})}>Stand</button>
        </div>
      </>
    );
  }

}

export default connect(null, {dispatchCard})(AppClass);
