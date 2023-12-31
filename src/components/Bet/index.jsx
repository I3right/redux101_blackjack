import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {BETTING} from '../../redux/actions/bet'
import {dispatchBet} from '../../redux/actions/bet'

import './index.css'

const Bet = () => {
  const dispatch = useDispatch()
  const [state,setState] = useState(0)

  const {balance} = useSelector((state) => state.coins)
  const {result} = useSelector((state) => state.cards)

  const endResulArr = ['Bust','Lose','Win','Push','Blackjack'] 
  let half = Math.floor(balance/2);
  let quater = Math.floor(balance/4);

  useEffect(()=>{
    if(endResulArr.includes(result)) {
      let params = {
        type: BETTING,
        payload: {balance:0}
      }

      if(result === 'Bust' || result === 'Lose') {
        params.payload.balance = balance - state
        dispatch(dispatchBet(params))
      }

      if(result === 'Win' || result === 'Blackjack') {
        params.payload.balance = balance + state
        dispatch(dispatchBet(params))
      }

      setState(0)
    };
  },[result])

  const handleOnChangeBetValue = (val) => {
    setState(val.target.value);
  }

  const decreaseBetValue = () => {
    if(state <= 0) {
      setState(0)
    } else {
      setState((prev) => prev - 1)
    }
  }

  const increaseBetValue = () => {
    if(state < balance) {
      setState((prev) => prev + 1)
    } else {
      setState(balance)
    }
  }

  console.log(result);

  return (
    <div className='beting-group'>
        <div className={`betting-value ${result !== 'None' ? 'disabled' : ''}`} >
          <button onClick={() => setState(5)}>5 $</button>
          <button onClick={() => setState(10)}>10 $</button>
          <button onClick={() => setState(quater)}>{quater}$</button>
          <button onClick={() => setState(half)}>{half}$</button>
          <button onClick={() => setState(balance)}>All in ({balance}$)</button>
          {/* <button onClick={()=>callBetting()}>BET</button> */}
        </div>

        <div className={`betting-value-percise ${result !== 'None' ? 'disabled' : ''}`} >
          <button onClick={() => decreaseBetValue()}>-</button>
          <input type='numbe' value={state} onChange={(val)=>handleOnChangeBetValue(val)} max={balance}/>
          <button onClick={() => increaseBetValue()}>+</button>
        </div>

        <div className='betting-result'>
          <span>
            <strong style={{color: balance<20? 'red' : 'black'}}>
              {balance}
            </strong>
            Left 
          </span>  
        </div>

    </div>
  )
}

export default Bet