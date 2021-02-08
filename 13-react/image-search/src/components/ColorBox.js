import React, { Component } from 'react';

class ColorBox extends Component {
  render() {
    return (
      <div style={ {width: '10em', height: '10em', backgroundColor: this.props.color} }>
      </div>
    );
  }
}

export default ColorBox;
