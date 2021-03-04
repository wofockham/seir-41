import React from 'react';
import { Link } from 'gatsby';

export default function Layout (props) {
  return (
    <div style={ { margin: '3rem auto', maxWidth: 650, padding: '0 1rem' } }>
      <h3>My Site About Fairies</h3>
      <nav>
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>
        
        <Link to="/contact">Contact</Link>
      </nav>
      { props.children }
    </div>
  )
}
