import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

export default function Layout (props) {
  return (
    <div>
      { props.children }
    </div>
  )
}
