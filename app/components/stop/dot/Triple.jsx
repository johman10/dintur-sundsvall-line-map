import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/stop/dot/styles.scss';

Triple.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default function Triple ({ x, y }) {
  const d = `M ${x} ${y} c -6 0 -12 4 -14 10 h -27 a 14 14 0 0 0 -27 0 h -27 a 14 14 0 1 0 0 9 h 27 a 14 14 0 0 0 27 0 h 27 a 14 14 0 1 0 14 -19z`;
  return (
    <path class={styles.dot} id="bus-line__stop--triple" d={d} />
  );
}
