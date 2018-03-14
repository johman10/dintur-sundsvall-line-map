import React from 'react';

import Stop from 'components/stop/Stop';
import IconArrow from 'components/icons/Arrow.jsx';

import styles from 'components/lines/Line.scss';

export default function Line2 () {
  return (
    <g>
      <path class={`${styles.line} ${styles['line--2']}`} d="M 1526.4 2190.4 v 129 h -608 v -131.8 h 775.3 v -167.3 h 252 V 1357 l 587.7 -587.6 H 2354 l -.6 -206 h 311 l 115.3 -98.6"/>
      <circle cx="818" cy="2255" r="57" class={`${styles['line__start-circle']} ${styles['line__start-circle--2']}`}/>
      <text class={styles['line__start-number']} x="790" y="2280.3">2</text>
      <text class={styles['line__start-title']} x="490.5" y="2278">Nacksta</text>

      <Stop dotX="2608.7" dotY="563.3" labelX="2623" labelY="535.6" labelTransform="rotate(-45, 2623, 535.6)" labelText="Antennvägen" />

      <Stop dotX="2494.3" dotY="808.6" labelX="2530.5" labelY="828" labelText="Fillanvägen" />

      <Stop dotX="2455" dotY="848" labelX="2491" labelY="867.7" labelText="Havsörnsvägen" />

      <Stop dotX="2415.8" dotY="887" labelX="2451.6" labelY="907" labelText="Jaktfalksvägen" />

      <Stop dotX="2376.6" dotY="926.4" labelX="2412" labelY="946.6" labelText="Skogsbacken" />

      <Stop dotX="2337.3" dotY="965.6" labelX="2372.7" labelY="986" labelText="Lantmätaren" />

      <Stop dotX="2298" dotY="1005" labelX="2333" labelY="1025.6" labelText="Bosvedjans C" />

      <Stop dotX="2258.8" dotY="1044" labelX="2293.8" labelY="1065" labelText="Bågevägen" />

      <Stop dotX="2219.6" dotY="1083.4" labelX="2254.3" labelY="1104.5" labelText="Bosvedjevägen" />

      <Stop dotX="2180.3" dotY="1122.6" labelX="2215" labelY="1144" labelText="Bydalen" />

      <Stop dotX="2141" dotY="1162" labelX="2175.4" labelY="1183.5" labelText="Bondevägen" />

      <Stop dotX="2101.8" dotY="1201" labelX="2136" labelY="1222.8" labelText="Hagaskolan" />

      <Stop dotX="2028" dotY="1274.8" labelX="1825" labelY="1274" labelText="Lasarettsvägen" />

      <Stop dotX="1982.8" dotY="1320" labelX="1809" labelY="1322" labelText="Västergatan" />

      <Stop dotX="1946" dotY="1399.5" labelX="1804.8" labelY="1407" labelText="Norrliden" />

      <Stop dotX="1946" dotY="1462" labelX="1772.3" labelY="1469.5" labelText="Tivolibacken" />

      <Stop dotX="1863.7" dotY="2020.3" labelX="1779.3" labelY="2138" labelTransform="rotate(-40, 1779.3, 2138)" labelText="Thulegatan" />

      <Stop dotX="1693.7" dotY="2062.8" labelX="1471.7" labelY="2070.4" labelText="Östra Långgatan" />

      <Stop dotX="1637" dotY="2187.6" labelX="1442.7" labelY="2153" labelText="Klockgjutaregatan" />

      <Stop dotX="1526.4" dotY="2241.4" labelX="1560.4" labelY="2251.8" labelText="Sveavägen" />

      <Stop dotX="1367" dotY="2318" labelX="1217.5" labelY="2492.4" labelTransform="rotate(-40, 1217.5, 2492.4)" labelText="Linderbergsgatan" />

      <Stop dotX="1296.5" dotY="2319.4" labelX="1196.3" labelY="2453" labelText="Midälvaplan" labelTransform="rotate(-40, 1196.3, 2453)" />

      <Stop dotX="1224.3" dotY="2319.4" labelX="1121" labelY="2455.4" labelText="Värmeverket" labelTransform="rotate(-40, 1121, 2455.4)" />

      <Stop dotX="1152" dotY="2319.4" labelX="1031" labelY="2470" labelText="Sallyhillsvägen" labelTransform="rotate(-40, 1031, 2470)" />

      <Stop dotX="1080" dotY="2319.4" labelX="936" labelY="2488.7" labelText="Nackstavägen 22" labelTransform="rotate(-40, 936, 2488.7)" />

      <Stop dotX="1007.7" dotY="2319.4" labelX="864" labelY="2488.7" labelText="Nackstavägen 38" labelTransform="rotate(-40, 864, 2488.7)" />

      <Stop dotX="918.4" dotY="2252.8" labelX="949.6" labelY="2262" labelText="Kristinelund" />

      <Stop dotX="1007.7" dotY="2187.6" labelX="1005.4" labelY="2156.5" labelText="Nackstaskolan" labelTransform="rotate(-40, 1005.4, 2156.5)" />

      <Stop dotX="1080" dotY="2187.6" labelX="1077.6" labelY="2156.6" labelText="Nacksta C" labelTransform="rotate(-40, 1077.6, 2156.6)" />

      <Stop dotX="1152" dotY="2187.6" labelX="1150" labelY="2156.6" labelText="Vinkeltået" labelTransform="rotate(-40, 1150, 2156.6)" />

      <Stop dotX="1224.3" dotY="2187.6" labelX="1222" labelY="2156.6" labelText="Bultgatan" labelTransform="rotate(-40, 1222, 2156.6)" />

      <Stop dotX="1296.5" dotY="2187.6" labelX="1294.3" labelY="2156.6" labelText="Slutgatan" labelTransform="rotate(-40, 1294.3, 2156.6)" />

      <IconArrow x="1150" y="2224"/>
      <IconArrow x="1219" y="2284" transform="rotate(180, 1255, 2284)"/>

      <circle cx="2858" cy="404" r="57" class={`${styles['line__start-circle']} ${styles['line__start-circle--2']}`} />
      <text class={styles['line__start-number']} x="2831.6" y="429">2</text>
      <text class={styles['line__start-title']} x="2929.3" y="430">Östra Birsta</text>
    </g>
  )
}
