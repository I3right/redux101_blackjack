import React from 'react'
import './index.css'

const index = (props) => {
  const {word} = props
  // console.log('modal',props);
  
  let style = {}
  let caption = ''

    if(word === 'Bust' || word === 'Lose') {
      caption = 'You lose';
      style = {
        backgroundColor : 'red',
        color : 'white',
      }
    }
    if(word === 'Win' || word === 'Blackjack') {
      caption = 'You Win';
      style = {
        backgroundColor : 'green',
        color : 'white',
      }
    }
    if(word === 'Push' ) {
      caption = 'You Tie';
      style = {
        backgroundColor : 'orange',
        color : 'white',
      }
    }

  // console.log('caption',caption);
  // console.log('style',style);

  return (
    <div className='modal-container' style={style}>
        <p>{caption}</p>
        <p>~ Press start to play agian ~</p>
    </div>
  )
}

export default index