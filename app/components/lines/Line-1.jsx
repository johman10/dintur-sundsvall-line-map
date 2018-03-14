import React from 'react';

import Stop from 'components/stop/Stop';
import IconApple from 'components/icons/Apple';
import IconArrow from 'components/icons/Arrow.jsx';

import styles from 'components/lines/Line.scss';

export default function Line1 () {
  return (
    <g>
      <path class={`${styles.line} ${styles['line--1']}`} d="M 979.3 1430.7 v -224 l -127.5 -136 -116.3 119 629.3 626.4 h 742.7 v -241 h 167.3 l 425 -422.4 V 988.5 h 496 V 1255"/>
      <circle cx="528" cy="964" r="57" class={`${styles['line__start-circle']} ${styles['line__start-circle--1']}`} />
      <text class={styles['line__start-number']} x="502.7" y="990.8">1</text>
      <text class={styles['line__start-title']} x="605" y="990">Bergsåker</text>

      <Stop dotX="762.7" dotY="1160" labelX="543" labelY="1150.6" labelText="Lillhällomsvägen" />

      <Stop dotX="769.6" dotY="1223.8" labelX="609" labelY="1241" labelText="Granlunda" />

      <Stop dotX="796.7" dotY="1126" labelX="614" labelY="1116.5" labelText="Dressyrvägen" />

      <Stop dotX="816.6" dotY="1270.6" labelX="626" labelY="1286.6" labelText="Bergsåker C" />

      <Stop dotX="833.4" dotY="1089.5" labelX="644" labelY="1332" labelText="Selångergården" />

      <Stop dotX="863.6" dotY="1317.3" labelX="662.5" labelY="1081" labelText="Skakelvägen" />

      <Stop dotX="882" dotY="1103.6" labelX="908" labelY="1092" labelText="Robäcken" />

      <Stop dotX="911.3" dotY="1133" labelX="942" labelY="1126" labelText="Kuskvägen" />

      <Stop dotX="979.3" dotY="1269" labelX="1007.6" labelY="1279.6" labelText="Travbanan" />

      <Stop dotX="979.3" dotY="1320" labelX="1010" labelY="1330.6" labelText="Ponnyvägen" />

      <Stop dotX="910.6" dotY="1364" labelX="701" labelY="1380" labelText="Travbanevägen" />

      <Stop dotX="957.6" dotY="1411" labelX="762.3" labelY="1428.3" labelText="Bergsåkers IP" />

      <Stop dotX="1030.6" dotY="1483" labelX="893.6" labelY="1499" labelText="Vikingen" />

      <Stop dotX="1077.6" dotY="1529.8" labelX="884" labelY="1547" labelText="Panncentralen" />

      <Stop dotX="1124.6" dotY="1576.5" labelX="935" labelY="1592.6" labelText="Höderbacken" />

      <Stop dotX="1171.6" dotY="1623.3" labelX="977" labelY="1638" labelText="Lundbovägen" />

      <Stop dotX="1218.6" dotY="1670" labelX="1017" labelY="1686" labelText="Sleipnervägen" />

      <Stop dotX="1265.6" dotY="1717" labelX="1085.7" labelY="1734.3" labelText="Kyrkogården" />

      <Stop dotX="1418.7" dotY="1816" labelX="1264" labelY="1993" labelTransform="rotate(-40, 1264, 1993)" labelText="Västermalms skola" />

      <IconApple />
      <Stop dotX="1491" dotY="1816" labelX="1356.3" labelY="1976.7" labelTransform="rotate(-40, 1356.3, 1976.7)" labelText="Mittuniversitetet" />

      <Stop dotX="1563" dotY="1816" labelX="1467.8" labelY="1944.5" labelTransform="rotate(-40, 1467.8, 1944.5)" labelText="Västra Allén" />

      <Stop dotX="1635.3" dotY="1816" labelX="1527.6" labelY="1954.6" labelTransform="rotate(-40, 1527.6, 1954.6)" labelText="Rättscentrum" />

      <Stop dotX="1708.7" dotY="1816" labelX="1653" labelY="1912" labelTransform="rotate(-40, 1653, 1912)" labelText="Ågatan" />

      <Stop dotX="2306" dotY="1544" labelX="2334.3" labelY="1568.6" labelText="Gillebergsgatan" />

      <Stop dotX="2357.4" dotY="1493" labelX="2386.8" labelY="1517" labelText="Skönsbergs C" />

      <Stop dotX="2409" dotY="1442" labelX="2439" labelY="1465.6" labelText="Tjädervägen" />

      <Stop dotX="2460.4" dotY="1391" labelX="2491.6" labelY="1414" labelText="Tjädervägen 13" />

      <Stop dotX="2512" dotY="1340" labelX="2544" labelY="1362.6" labelText="Korstavägen" />

      <Stop dotX="2563.4" dotY="1289" labelX="2596.5" labelY="1311" labelText="Klippgatan" />

      <Stop dotX="2615" dotY="1238" labelX="2649" labelY="1259.6" labelText="Korstabergsvägen" />

      <Stop dotX="2983.4" dotY="988.5" labelX="2981" labelY="957.5" labelTransform="rotate(-40, 2981, 957.5)" labelText="Alnöbron östra" />

      <Stop dotX="3065.6" dotY="988.5" labelX="3063.4" labelY="957.5" labelText="Brovägen" labelTransform="rotate(-40, 3063.4, 957.5)" />

      <Stop dotX="3196" dotY="1036.7" labelX="3227" labelY="1044" labelText="Vi centrum" />

      <Stop dotX="3196" dotY="1089" labelX="3227" labelY="1096.6" labelText="Räbbmogatan" />

      <Stop dotX="3196" dotY="1141.6" labelX="3227" labelY="1149" labelText="Uslands skola" />

      <Stop dotX="3196" dotY="1194" labelX="3227" labelY="1201.5" labelText="Lastbåtsvägen" />

      <Stop dotX="3196" dotY="1246.5" labelX="3227" labelY="1254" labelText="Ögården" />

      <IconArrow x="830" y="1227" transform="rotate(225, 866, 1241)"/>
      <IconArrow x="921" y="1200" transform="rotate(45, 958, 1113)"/>

      <circle cx="3196" cy="1346" r="57" class={`${styles['line__start-circle']} ${styles['line__start-circle--1']}`} />
      <text class={styles['line__start-number']} x="3168" y="1371.3">1</text>
      <text class={styles['line__start-title']} x="3275.6" y="1368.3">Alnö</text>
    </g>
  );
}
