import React from 'react';

import styles from 'components/icons/Train.scss';

export default function Train () {
  return (
    <g class={styles.train}>
      <path d="M 2247.5 1971 c 0 4.5 -4.4 8 -9.8 8 h -8.8 c -5.4 0 -9.8 -3.6 -9.8 -8 v -20.6 c 0 -4.5 4.4 -8 9.8 -8 h 8.8 c 5.4 0 9.8 3.6 9.8 8 v 20.6z" />
      <path d="M 2239 1940 c 0 0 -.7 .7 -1.6 .7 h -8 c -1 0 -1.6 0 -1.6 -.7 v -1.4 c 0 0 .7 -.7 1.6 -.7 h 8 c1 0 1.6 0 1.6 .7 v 1.4z"/>
      <path d="M 2223.7 1978.4 l -6.8 8 h 5 l 1.3 -1.8 h 20.8 l 1.3 1.8 h 5.3 l -7 -8 -2 1 1 2.5 h -18.4 l 1.4 -2.5z"/>
      <path class={styles.train__detail} d="M 2243 1957.5 c 0 1.6 -1.3 2.8 -3 2.8 h -14 a 3 3 0 0 1 -3 -2.8 v -5 c 0 -1.6 1.3 -2.8 3 -2.8 h 14 c 1.6 0 3 1.3 3 2.8 v 5zm -7 -11 c 0 0 0 1 -.8 1 h -4 c 0 0 -.8 0 -.8 -1 v -1.6 c 0 0 0 -1 .8 -1 h 4 c.5 0 .8 0 .8 1 v 1.6z"/>
      <path class={styles.train__detail} d="M 2229.5 1971 c 0 1.7 -1.4 3 -3 3 a 3 3 0 0 1 -3 -3 c 0 -1.7 1.4 -3 3 -3 1.7 0 3 1.4 3 3 m 14 0 c 0 1.7 -1.4 3 -3 3 a 3 3 0 0 1 -3 -3 c 0 -1.7 1.4 -3 3 -3 1.7 0 3 1.4 3 3"/>
    </g>
  )
};
