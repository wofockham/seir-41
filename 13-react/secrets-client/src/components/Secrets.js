import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json';

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    }

    // Polling for "live" updating:
    const fetchSecrets = () => {
      axios.get(SERVER_URL).then((response) => {
        this.setState({secrets: response.data});
        setTimeout(fetchSecrets, 4000); // recursive alternative to setInterval
      });
    };

    fetchSecrets();
  }

  saveSecret(content) {
    axios.post(SERVER_URL, {content: content}).then((response) => {
      console.log(response);
    })
  }

  render() {
    console.log('Secrets render()');
    return (
      <div>
        <SecretForm onSubmit={ this.saveSecret } />
        <SecretsList secrets={ this.state.secrets } />
      </div>
    );
  }
}

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
    this.props.onSubmit(this.state.content);
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
  console.log('SecretsList render()');
  return (
    <div>
      { props.secrets.map( (s) => <p key={ s.id }>{ s.content }</p> ) }
    </div>
  )
};

export default Secrets;
