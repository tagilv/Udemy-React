import React, { Component } from 'react';
import { choice } from './helpers';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
      {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg'}
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null, //As its not showing heads or tails at start
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1
      };
    })
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h2>Lets flip a coin</h2>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails </p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default CoinContainer;
