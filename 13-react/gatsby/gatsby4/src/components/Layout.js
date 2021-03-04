import React from 'react';

import { rhythm } from '../utils/typography';

export default function Layout (props) {
  return (
    <div style={ { margin: '0 auto', maxWidth: '700px', padding: rhythm(2), paddingTop: rhythm(1.5) } }>
      { props.children }
    </div>
  )
}
