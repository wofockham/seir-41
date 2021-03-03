import React from "react";
import Header from '../components/Header';

export default function About() {
  return (
    <div style={ {color: 'teal', fontSize: '52px'} }>
      <Header headerText="About Us" />
      <Header headerText="Any Questions" />
      <p>Facts about us coming soon.</p>
    </div>
  )
}
