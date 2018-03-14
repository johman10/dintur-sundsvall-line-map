import React from 'react';

import Stop from 'components/stop/Stop';

import styles from 'components/lines/Line.scss';

export default function Line3 () {
  return (
    <g>
      <path class={`${styles.line} ${styles['line--3']}`} d="M 1257.8 1137.7 l 467.3 464.3 h 166 v 210.8 h 108.7 v 481.3 h -346 v 229.6"/>
      <circle cx="1200" cy="1071" r="57" class={`${styles['line__start-circle']} ${styles['line__start-circle--3']}`} />
      <text class={styles['line__start-number']} x="1174" y="1095.4">3</text>
      <text class={styles['line__start-title']} x="999" y="934.6">
        <tspan x="999" dy="0">Västra</tspan>
        <tspan x="999" dy="55">Granloholm</tspan>
      </text>

      <Stop dotX="1268.3" dotY="1147.3" labelX="1044.7" labelY="1170" labelText="Strömstadsvägen" />

      <Stop dotX="1315.3" dotY="1194" labelX="1121" labelY="1259.7" labelText="Kungsbackavägen" />

      <Stop dotX="1362.3" dotY="1240.8" labelX="1188.4" labelY="1305" labelText="Halmstadsvägen" />

      <Stop dotX="1409.3" dotY="1287.6" labelX="1192.5" labelY="1214.3" labelText="Gläntan" />

      <Stop dotX="1503.3" dotY="1381" labelX="1315.3" labelY="1401.4" labelText="Granloskogen" />

      <Stop dotX="1550.3" dotY="1428" labelX="1381" labelY="1446.8" labelText="Rosenvägen" />

      <Stop dotX="1597.3" dotY="1474.7" labelX="1446.5" labelY="1492" labelText="Västhagen" />

      <Stop dotX="1644.3" dotY="1521.4" labelX="1480.6" labelY="1540.3" labelText="Sporthallen" />

      <Stop dotX="1691.4" dotY="1568" labelX="1511" labelY="1588.5" labelText="Idrottsparken" />

      <Stop dotX="2000.8" dotY="2199" labelX="2031" labelY="2207.4" labelText="Fänriksgatan" />

      <Stop dotX="1934.6" dotY="2295.3" labelX="1928.4" labelY="2343" labelText="Stuggränd" labelTransform="rotate(40, 1928.4, 2343)" />

      <Stop dotX="1863.7" dotY="2295.3" labelX="1857.6" labelY="2343" labelText="Pilgränd" labelTransform="rotate(40, 1857.6, 2343)" />

      <Stop dotX="1793" dotY="2295.3" labelX="1786.7" labelY="2343" labelText="Branta vägen" labelTransform="rotate(40, 1786.7, 2343)" />

      <Stop dotX="1722" dotY="2295.3" labelX="1715.8" labelY="2343" labelText="Rörgatan" labelTransform="rotate(40, 1715.8, 2343)" />

      <Stop dotX="1654" dotY="2390" labelX="1433.6" labelY="2397.6" labelText="Fagerdalsparken" />

      <Stop dotX="1654" dotY="2432.5" labelX="1451" labelY="2440" labelText="Paviljongvägen" />

      <Stop dotX="1654" dotY="2475.5" labelX="1454" labelY="2483" labelText="Glimmervägen" />

      <Stop dotX="1654" dotY="2518" labelX="1506.7" labelY="2525.6" labelText="Mårtensro" />

      <circle cx="1653" cy="2615" r="57" class={`${styles['line__start-circle']} ${styles['line__start-circle--3']}`} />
      <text class={styles['line__start-number']} x="1628.3" y="2639.8">3</text>
      <text class={styles['line__start-title']} x="1729" y="2636.5">Sidsjö</text>
    </g>
  )
}
