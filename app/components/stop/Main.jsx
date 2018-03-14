import React from 'react';

import styles from 'components/stop/Main.scss';

export default function Main () {
  return (
    <g class={styles.main}>
      <path class={styles.main__dot} d="M 2138.7 1816 c 0 51 -63.5 92 -141.7 92 -78.3 0 -141.7 -41 -141.7 -92 0 -51 63.5 -92 141.7 -92 78 0 141.7 41.3 141.7 92z"/>
      <text x="1925" y="1807.4">
        <tspan x="1925" dy="0">BUSS</tspan>
        <tspan x="1908" dy="50">NAVET</tspan>
      </text>
    </g>
  )
}
