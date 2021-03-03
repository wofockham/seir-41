import React from 'react';
import * as renamedStyles from './container.module.css';

export default function Container (props) {
  console.log( renamedStyles );
  return (
    <div className={ renamedStyles.container }>
      { props.children }
    </div>
  );
};
