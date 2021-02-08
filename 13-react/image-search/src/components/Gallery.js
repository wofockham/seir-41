import React, { Component } from 'react';

// Functional components: for when you don't need state.
// this.props becomes simply props (once you "accept" it in the function)
const Gallery = (props) => {
  return (
    <div>
      { props.images.map( (url) => <img key={ url } src={ url } /> ) }
    </div>
  );
};

export default Gallery;
