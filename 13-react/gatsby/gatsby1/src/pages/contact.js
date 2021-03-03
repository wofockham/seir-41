import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

export default function Contact () {
  return (
    <div>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Please do not contact us</p>
    </div>
  )
}
