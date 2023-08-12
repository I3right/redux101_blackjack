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
              <span className="card-suit">
              {card.suit === 'H' ? '♥' 
              :card.suit === 'C' ? '♣' 
              :card.suit === 'S' ? '♠'
              : '♦' }
              </span>
            </div>
          )
        })}
      </div>  
    );
  }
}

export default Cards;
