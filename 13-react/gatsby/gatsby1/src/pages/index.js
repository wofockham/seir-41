import React from "react";
import { Link } from "gatsby";
import Header from '../components/Header';

export default function Home() {
  return (
    <div style={ {color: 'purple', fontSize: '72px' } }>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Header headerText="Wow" />
      <p>Hello cruel world!</p>
      <img src="http://www.placekitten.com/360/240" alt="Cute kitten" />
    </div>
  );
}
