import React, { Component } from 'react';
import Github from '../github';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      repos: null
    }
  }

  // React lifecycle method
  componentDidMount() {
    const { username } = this.props.match.params;
    Github.getUserInfo(username).then((result) => {
      this.setState({user: result.data});
    });

    Github.getUserRepos(username);
  }

  render() {
    return (
      <h2>{ this.props.match.params.username } coming soon</h2>
    );
  }
}

export default Profile;
