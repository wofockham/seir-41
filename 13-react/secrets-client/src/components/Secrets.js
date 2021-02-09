import React, { Component } from 'react';

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: [
        { id: 1, content: 'Secret about eggs' },
        { id: 2, content: 'Secret about icecream' },
        { id: 3, content: 'Secret about rubber gloves' },
        { id: 5, content: 'Secret about shoplifting' },
      ]
    }
  }

  render() {
    return (
      <div>
        <SecretForm />
        <SecretsList secrets={ this.state.secrets } />
      </div>
    );
  }
}

// class is good when you have state: this.setState

// detect when the form is submitted and do something with the state (???)

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({content: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log('doing something with this secret', this.state.content);
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } />
        <input type="submit" value="Tell" />
      </form>
    )
  }
}

// functional component: quick and dirty if you don't need state
// NO THIS
const SecretsList = (props) => {
  return (
    <div>
      { props.secrets.map( (s) => <p key={ s.id }>{ s.content }</p> ) }
    </div>
  )
};

export default Secrets;
