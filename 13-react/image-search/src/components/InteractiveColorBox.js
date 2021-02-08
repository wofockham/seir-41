import React, { Component } from 'react';

class InteractiveColorBox extends Component {
  constructor() {
    super();
    this.state = {
      color: 'red'
    };

    this._makeItBlue = this._makeItBlue.bind(this);
    this._makeItGreen = this._makeItGreen.bind(this);
  }

  _makeItBlue() {
    this.setState({color: 'blue'});
  }

  _makeItGreen() {
    this.setState({color: 'green'});
  }

  render() {
    return (
      <div style={ {width: '10em', height: '10em', backgroundColor: this.state.color } }>
        <button onClick={ this._makeItBlue }>Blue</button>
        <button onClick={ this._makeItGreen }>Green</button>
      </div>
    )
  }
}

export default InteractiveColorBox;
