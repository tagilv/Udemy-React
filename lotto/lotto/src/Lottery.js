import React, { Component } from 'react'

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40,
  }
  constructor(){
    super(props);
    this.state = {nums: []}
  }
  render () {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          Balls go here!
        </div>
        <button onClick={this.handleClick}>Generate Click</button>
      </section>

    )
  }
}

export default Lottery;
