import React from 'react';

import Stop from 'components/stop/Stop';
import IconHospital from 'components/icons/Hospital.jsx';

import styles from 'components/lines/Line.scss';

export default function Line4 () {
  return (
    <g>
      <path class={`${styles.line} ${styles['line--4']}`} d="M 1450 1252 l 68 68 h 59.5 l 279 -280.7 324.6 317.5 -181.4 181.4 v 277.8 h 54 v 201.3 l 258 266.4 v 377.8"/>
      <circle cx="1410" cy="1174" r="57" class={`${styles['line__start-circle']} ${styles['line__start-circle--4']}`} />
      <text class={styles['line__start-number']} transform="matrix(1.0462 0 0 1 1380.8 1199.7)">4</text>
      <text class={styles['line__start-title']} x="1418.5" y="989.7">Granloholm C</text>

      <Stop dotX="2090.5" dotY="2054.3" labelX="2138.7" labelY="2062" labelText="Grevegatan" />

      <Stop dotX="2134.7" dotY="2100.8" labelX="2187" labelY="2105.8" labelText="Mogatan" />

      <Stop dotX="2179.8" dotY="2147.3" labelX="2229.4" labelY="2152.6" labelText="Skönsmons skola" />

      <Stop dotX="2223.7" dotY="2193.8" labelX="2274.8" labelY="2198" labelText="Härstavägen" />

      <Stop dotX="2269" dotY="2240.3" labelX="2317.3" labelY="2243.3" labelText="Skönsmohuset" />

      <Stop dotX="2311.6" dotY="2286.8" labelX="2348.4" labelY="2294.3" labelText="Enhörningsvägen" />

      <Stop dotX="2311.6" dotY="2338.6" labelX="2349.3" labelY="2347" labelText="Fäbodsandsvägen" />

      <Stop dotX="1668" dotY="1229.5" labelX="1480" labelY="1234" labelText="Malmövägen" />

      <Stop dotX="1705" dotY="1192.6" labelX="1476" labelY="1194.5" labelText="Borgholmsvägen" />

      <Stop dotX="1741.8" dotY="1155" labelX="1492" labelY="1154.8" labelText="Nynäshamnsvägen" />

      <Stop dotX="1778.7" dotY="1117.5" labelX="1613.8" labelY="1115" labelText="Luleåvägen" />

      <Stop dotX="1815.5" dotY="1080" labelX="1589.3" labelY="1075.5" labelText="Haparandavägen" />

      <Stop dotX="1856.6" dotY="1042.4" labelX="1889" labelY="1035.8" labelText="Igeltjärnsvägen" />

      <IconHospital x="2056.4" y="1058.4" />
      <Stop dotX="1896" dotY="1080" labelX="1929" labelY="1075.4" labelText="Sjukhuset" />

      <Stop dotX="2093.3" dotY="1272" labelX="2127.4" labelY="1274" labelText="Hagavägen" />

      <Stop dotX="1935.3" dotY="1117.5" labelX="1971.4" labelY="1115" labelText="Baldershov" />

      <Stop dotX="1974.6" dotY="1155" labelX="1817" labelY="1171.8" labelText="Lindgården" />

      <Stop dotX="2012.6" dotY="1192.6" labelX="1831.8" labelY="1214.3" labelText="Institutsvägen" />

      <Stop dotX="2311.6" dotY="2385" labelX="2349.3" labelY="2393.5" labelText="Kontorsvägen" />

      <Stop dotX="2311.6" dotY="2427.7" labelX="2349.3" labelY="2436" labelText="Norrstigen" />

      <Stop dotX="2311.6" dotY="2472.7" labelX="2349.3" labelY="2481" labelText="Fläsian" />

      <Stop dotX="2311.6" dotY="2517.8" labelX="2349.3" labelY="2525.8" labelText="Bredsands skola" />

      <Stop dotX="2311.6" dotY="2563" labelX="2349.3" labelY="2570.8" labelText="Strandvägen" />

      <Stop dotX="2311.6" dotY="2608" labelX="2349.3" labelY="2615.7" labelText="Plastvägen" />

      <Stop dotX="2311.6" dotY="2653" labelX="2349.3" labelY="2660.7" labelText="Syntesvägen" />

      <circle cx="2310" cy="2751" r="57" class={`${styles['line__start-circle']} ${styles['line__start-circle--4']}`} />
      <text class={styles['line__start-number']} transform="matrix(1.0462 0 0 1 2283 2778.3)">4</text>
      <text class={styles['line__start-title']} x="2386.6" y="2773">Bredsand</text>
    </g>
  )
}
