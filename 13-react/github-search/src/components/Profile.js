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

    Github.getUserRepos(username).then((result) => {
      this.setState({repos: result.data});
    });
  }

  render() {
    return (
      <div>
        <h2>Profile for { this.props.match.params.username }</h2>
        <UserInfo user={ this.state.user } />
        <Repositories repos={  this.state.repos } />
      </div>
    );
  }
}

const UserInfo = (props) => {
  // Conditional rendering
  if (props.user === null) {
    return (<div>Loading...</div>);
  }

  const { login, bio, followers, following, public_repos, public_gists } = props.user;

  return (
    <div>
      <h3>Stats for { login }</h3>
      <p>Bio: { bio }</p>
      <p>Followers: { followers }</p>
      <p>Following: { following }</p>
      <p>Public repos: { public_repos }</p>
      <p>Public gists: { public_gists }</p>
    </div>
  );
};

const Repositories = (props) => {
  if (props.repos === null) {
    return (<div>Loading...</div>);
  }

  const userRepos = props.repos.map((r) => (
    <li key={ r.id }>
      <a href={ r.html_url } target="_blank">
        { r.name }
      </a>
    </li>
  ));

  return (
    <div>
      <h3>User Repos</h3>
      <ul>
        { userRepos }
      </ul>
    </div>
  );
}

export default Profile;
