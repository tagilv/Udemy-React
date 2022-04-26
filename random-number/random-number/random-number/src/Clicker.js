import React, {Component} from 'react'

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.genRandom = this.genRandom.bind(this)
  }
  genRandom(){
    // pick random number
    let rand = Math.floor(Math.random() * 10) + 1
    // Update state with new random number
    this.setState({ num: rand });
    //bind
  }
  render() {
    return (
      <div>
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7
          ? <h2>You winn</h2>
          : <button onClick={this.genRandom}>Random Number</button>
        }
      </div>
    );
  }
}

export default Clicker;
