import React from 'react';
import * as styles from './about-css-modules.module.css';

import Container from '../components/Container';

const User = (props) => (
  <div className={ styles.user }>
    <img src={ props.avatar } className={ styles.avatar } />
    <div className={ styles.description }>
      <h2 className={ styles.username }>{ props.username }</h2>
      <p className={ styles.excerpt }>{ props.excerpt }</p>
    </div>
  </div>
);

export default function About () {
  console.log(styles);
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS modules limit the damage of global CSS</p>
      <User username="Maria" avatar="http://www.fillmurray.com/96/96" excerpt="No gods no masters" />
      <User username="Bill" avatar="http://www.fillmurray.com/98/98" excerpt="No gods no masters" />
    </Container>
  );
}
