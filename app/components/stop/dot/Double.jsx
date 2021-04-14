import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/stop/dot/styles.scss';

Double.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  size: PropTypes.oneOf([27, 34, 46, 54]).isRequired,
  transform: PropTypes.string
}

export default function Double ({ x, y, size = 27, transform }) {
  const d = `M ${x} ${y} c -6 0 -12 4 -14 10 h -${size} a 14 14 0 1 0 0 9 h ${size} a 14 14 0 1 0 14 -19z`
  return (
    <svg>
      <path class={styles.dot} d={d} transform={transform} />
    </svg>
  );
}
