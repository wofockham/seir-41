import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault(); // prevent the form being submitted to some server.
    console.log('searching for', this.state.query);

    const flickrURL = 'https://api.flickr.com/services/rest';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: this.state.query,
      format: 'json',
      nojsoncallback: 1 // why? read the Flickrs docs if you're terribly bored.
    };

    axios(flickrURL, { params: flickrParams }).then(function (output) {
      console.log(output);
    });
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="clouds" required onInput={ this._handleInput } />
        <button>Search for { this.state.query }</button>
      </form>
    );
  }
}

export default SearchForm;
