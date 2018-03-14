import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/icons/Arrow.scss';

const LENGTH = 70

Arrow.propType = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  transform: PropTypes.string
}

export default function Arrow ({ x, y, transform }) {
  y = parseInt(y);
  const x1 = parseInt(x);
  const x2 = parseInt(x) + LENGTH;
  return (
    <g transform={transform}>
      <line x1={x1} x2={x2} y1={y} y2={y} className={`${styles.arrow} ${styles.arrow__line}`} />
      <path class="arrow__line" d={`M ${x2 - 7} ${y - 7} l 7 7 -7 7 h 5.7 l 7 -7 -7 -6.8z`} class={`${styles.arrow} ${styles.arrow__point}`} />
    </g>
  )
}
