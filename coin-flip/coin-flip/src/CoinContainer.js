import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin'

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/US_One_Cent_Obv.png/1200px-US_One_Cent_Obv.png'},
      {side: 'tails', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2017-D_Roosevelt_dime_reverse_transparent.png/220px-2017-D_Roosevelt_dime_reverse_transparent.png'}
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
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
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
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails
        </p>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default CoinContainer;
