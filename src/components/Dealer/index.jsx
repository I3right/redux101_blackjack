import React, { Component } from "react";
import { connect } from 'react-redux';
import Cards from '../Cards'

export class Dealer extends Component {
  render() {
    const {dealer} = this.props;

    return (
      <div className="dealer">
        <div className="title">
            <strong>Dealer</strong>, Score: <span className="score"> {dealer.score}</span>
        </div>

        <Cards cards={dealer.cards} name='dealer'/>
      </div> 
    );
  }
}

const mapStateToProps = (state) => {
  return {dealer: state.cards.dealer}
};

export default connect(mapStateToProps)(Dealer);