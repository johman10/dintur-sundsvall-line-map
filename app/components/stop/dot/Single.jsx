import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/stop/dot/styles.scss';

Single.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default function Single ({ x, y }) {
  const absoluteX = parseFloat(x) - 14;
  const absoluteY = parseFloat(y) - 14;
  const d = `m 0 14q0 -14, 14 -14q14 0, 14 14q0 14, -14 14q-14 0, -14 -14z`;
  return (
    <svg x={absoluteX} y={absoluteY} width="28" height="28" viewBox="0 0 28 28">
      <path class={styles.dot} d={d} />
    </svg>
  );
}
