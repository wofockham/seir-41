import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: (new Date()).toString()
    };

    // arrow functions do not lose sight of `this`:
    setInterval(() => {
      this.setState({time: (new Date()).toString()})
    }, 1000);
  }



  render() {
    return (
      <h1>
        { this.state.time }
      </h1>
    )
  }
}

export default Clock;
