import React, { Component } from "react";
import './index.css'

export class Cards extends Component {
  render() {
    // console.log('Cards', this?.props);
    const {cards,name} = this.props
    // console.log(cards,name);
    

    return (
      <div className="card-group">
        {cards?.map((card,index)=>{
          return(
            <div key={index} className="card">
              <span className="card-value">
                {card.rank}
              </span>
              <span className="card-suit" style={{color : card.suit === 'H' || card.suit === 'D' ? "red" : "black" }}>
              {card.suit === 'H' ? '♥' 
              :card.suit === 'C' ? '♣' 
              :card.suit === 'S' ? '♠'
              : '♦' }
              </span>
              <figure className="bg-suit" style={{color : card.suit === 'H' || card.suit === 'D' ? "red" : "black" }}>
              {card.suit === 'H' ? '♥' 
              :card.suit === 'C' ? '♣' 
              :card.suit === 'S' ? '♠'
              : '♦' }
              </figure>
            </div>
          )
        })}
      </div>  
    );
  }
}

export default Cards;
