import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

/* HashRouter is much easier to deploy. BrowserRouter requires more work. */

// NB: Not a component: just a variable with some JSX.
const Routes = (
  <Router>
    <Route exact path="/" component={ Home } />
    <Route exact path="/search" component={ Search } />
    <Route path="/details/:username" component={ Profile } />
  </Router>
);

ReactDOM.render(Routes, document.body);
