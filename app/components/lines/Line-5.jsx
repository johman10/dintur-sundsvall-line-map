import React from 'react';

import Stop from 'components/stop/Stop';

import styles from 'components/lines/Line.scss';

export default function Line5 () {
  return (
    <g>
      <path class={`${styles.line} ${styles['line--5']}`} d="M 2548 253.4 l.6 364 h -139.7 v 98.8 h 164 l 163.4 -153 h 312.4 l -402.5 405.4 v 164.4 l -22.7 22.7 h -167 l -402.5 402.5 v 258"/>
      <circle cx="2549" cy="162" r="57" class={`${styles['line__start-circle']} ${styles['line__start-circle--5']}`} />
      <text class={styles['line__start-number']} x="2521" y="188.5">5</text>
      <text class={styles['line__start-title']} x="2633.7" y="185">Gångviken</text>

      <Stop dotX="2548" dotY="259" labelX="2307.4" labelY="394" labelText="Johannedalsvägen" />

      <Stop dotX="2548" dotY="301.6" labelX="2307" labelY="309" labelText="Fyrväpplingsvägen" />

      <Stop dotX="2548" dotY="344" labelX="2324.6" labelY="266.6" labelText="Gångvikens skola" />

      <Stop dotX="2548" dotY="386.6" labelX="2344" labelY="436.7" labelText="Västlandsvägen" />

      <Stop dotX="2548" dotY="429" labelX="2374.8" labelY="351.6" labelText="Sundsbruk C" />

      <Stop dotX="2548" dotY="471.6" labelX="2387.7" labelY="479" labelText="Birstavägen" />

      <Stop dotX="2548" dotY="514" labelX="2388" labelY="521.7" labelText="Sköns kyrka" />

      <Stop dotX="2731" dotY="883.6" labelX="2761.7" labelY="908" labelText="Ekebovägen" />

      <Stop dotX="2794" dotY="819.6" labelX="2826" labelY="841.3" labelText="Februarivägen" />

      <Stop dotX="2857" dotY="755.5" labelX="2890" labelY="774.4" labelText="Aprilvägen" />

      <Stop dotX="2920" dotY="691.4" labelX="2954.3" labelY="707.5" labelText="Ljustadalens C" />

      <Stop dotX="2982.8" dotY="627.4" labelX="3018.5" labelY="640.6" labelText="Måndagsvägen" />

      <Stop dotX="3045.8" dotY="563.3" labelX="3082.6" labelY="573.7" labelText="Fredagsvägen" />

      <Stop dotX="2320" dotY="1291.8" labelX="2348.5" labelY="1314" labelText="Punkten" />

      <Stop dotX="2376.8" dotY="1235" labelX="2396.6" labelY="1262.5" labelText="Gärde" />
    </g>
  )
}
