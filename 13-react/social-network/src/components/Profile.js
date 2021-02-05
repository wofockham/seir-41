import React, { Component } from 'react'; // Destructuring

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      height: 100 // initial value
    };
    this._zoomIn = this._zoomIn.bind(this); // This makes it work.
    this._zoomOut = this._zoomOut.bind(this);
  }

  _zoomIn() {
    this.setState({height: this.state.height + 10});
  }

  _zoomOut() {
    this.setState({height: this.state.height - 10});
  }

  render() {
    const { name, age, motto, pic } = this.props;

    return (
      <div>
        <h2>{ name }</h2>
        <h3>{ motto }</h3>
        <h4>Age: { age }</h4>
        <div>
          <button onClick={ this._zoomIn }> + </button>
          <button onClick={ this._zoomOut }> - </button>
        </div>
        <img src={ pic } alt={ name } height={ this.state.height } />
      </div>
    )
  }
}

export default Profile;
