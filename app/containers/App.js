import React, { Component } from 'react';
import IconTrain from 'components/icons/Train';
import IconApple from 'components/icons/Apple';
import IconArrow from 'components/icons/Arrow.jsx';
import IconHospital from 'components/icons/Hospital.jsx';

import StopDotSingle from 'components/stop/dot/Single';
import StopDotDouble from 'components/stop/dot/Double';
import StopDotTriple from 'components/stop/dot/Triple';

import Stop from 'components/stop/Stop';

export default class App extends Component {
  render () {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3687 2979">
        <defs>
          <linearGradient id="color--bus-line--1">
            <stop stop-color="#c61b36"/>
          </linearGradient>
          <linearGradient id="color--bus-line--2">
            <stop stop-color="#72bf44"/>
          </linearGradient>
          <linearGradient id="color--bus-line--3">
            <stop stop-color="#fdb913"/>
          </linearGradient>
          <linearGradient id="color--bus-line--4">
            <stop stop-color="#00b9f2"/>
          </linearGradient>
          <linearGradient id="color--bus-line--5">
            <stop stop-color="#004282"/>
          </linearGradient>
        </defs>

        <path class="bus-line" stroke="url(#color--bus-line--1)" d="M 979.3 1430.7 v -224 l -127.5 -136 -116.3 119 629.3 626.4 h 742.7 v -241 h 167.3 l 425 -422.4 V 988.5 h 496 V 1255"/>
        <circle cx="528" cy="964" r="57" fill="url(#color--bus-line--1)"/>
        <text class="bus-line__start-number" x="502.7" y="990.8">1</text>
        <text class="bus-line__start-title" x="605" y="990">Bergsåker</text>

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

        <circle cx="3196" cy="1346" r="57" fill="url(#color--bus-line--1)"/>
        <text class="bus-line__start-number" transform="matrix(1.0007 0 0 1 3168 1371.3)">1</text>
        <text class="bus-line__start-title" x="3275.6" y="1368.3">Alnö</text>






        <path class="bus-line" stroke="url(#color--bus-line--2)" d="M 1526.4 2190.4 v 129 h -608 v -131.8 h 775.3 v -167.3 h 252 V 1357 l 587.7 -587.6 H 2354 l -.6 -206 h 311 l 115.3 -98.6"/>
        <circle cx="818" cy="2255" r="57" fill="url(#color--bus-line--2)"/>
        <text class="bus-line__start-number" transform="matrix(1.0462 0 0 1 790 2280.3)">2</text>
        <text class="bus-line__start-title" x="490.5" y="2278">Nacksta</text>

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

        <circle cx="2858" cy="404" r="57" fill="url(#color--bus-line--2)"/>
        <text class="bus-line__start-number" transform="matrix(1.0462 0 0 1 2831.6 429)">2</text>
        <text class="bus-line__start-title" x="2929.3" y="430">Östra Birsta</text>
        <path class="bus-line" stroke="url(#color--bus-line--3)" d="M 1257.8 1137.7 l 467.3 464.3 h 166 v 210.8 h 108.7 v 481.3 h -346 v 229.6"/>





        <circle cx="1200" cy="1071" r="57" fill="url(#color--bus-line--3)"/>
        <text class="bus-line__start-number" transform="matrix(1.0462 0 0 1 1174 1095.4)">3</text>
        <text class="bus-line__start-title" x="999" y="934.6">
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

        <circle cx="1653" cy="2615" r="57" fill="url(#color--bus-line--3)"/>
        <text class="bus-line__start-number" transform="matrix(1.0462 0 0 1 1628.3 2639.8)">3</text>
        <text class="bus-line__start-title" x="1729" y="2636.5">Sidsjö</text>





        <path class="bus-line" stroke="url(#color--bus-line--4)" d="M 1450 1252 l 68 68 h 59.5 l 279 -280.7 324.6 317.5 -181.4 181.4 v 277.8 h 54 v 201.3 l 258 266.4 v 377.8"/>
        <circle cx="1410" cy="1174" r="57" fill="url(#color--bus-line--4)"/>
        <text class="bus-line__start-number" transform="matrix(1.0462 0 0 1 1380.8 1199.7)">4</text>
        <text class="bus-line__start-title" x="1418.5" y="989.7">Granloholm C</text>

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

        <circle cx="2310" cy="2751" r="57" fill="url(#color--bus-line--4)"/>
        <text class="bus-line__start-number" transform="matrix(1.0462 0 0 1 2283 2778.3)">4</text>
        <text class="bus-line__start-title" x="2386.6" y="2773">Bredsand</text>




        <path class="bus-line" stroke="url(#color--bus-line--5)" d="M 2548 253.4 l.6 364 h -139.7 v 98.8 h 164 l 163.4 -153 h 312.4 l -402.5 405.4 v 164.4 l -22.7 22.7 h -167 l -402.5 402.5 v 258"/>
        <circle cx="2549" cy="162" r="57" fill="url(#color--bus-line--5)"/>
        <text class="bus-line__start-number" transform="matrix(1.0462 0 0 1 2521 188.5)">5</text>
        <text class="bus-line__start-title" x="2633.7" y="185">Gångviken</text>

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



        <g class="bus-line__stop bus-line__stop--main">
          <path class="bus-line__stop-dot bus-line__stop-dot--main" d="M 2138.7 1816 c 0 51 -63.5 92 -141.7 92 -78.3 0 -141.7 -41 -141.7 -92 0 -51 63.5 -92 141.7 -92 78 0 141.7 41.3 141.7 92z"/>
          <text x="1925" y="1807.4">
            <tspan x="1925" dy="0">BUSS</tspan>
            <tspan x="1908" dy="50">NAVET</tspan>
          </text>
        </g>

        <Stop dotX="2107.5" dotY="1677.3" labelX="2136" labelY="1699" labelText="Kommunhuset" dotType="Triple" />

        <Stop dotX="2107.5" dotY="1640.5" labelX="2136" labelY="1663.6" labelText="Bjälkvägen" dotType="Triple" />

        <Stop dotX="2107.5" dotY="1603.6" labelX="2136" labelY="1628" labelText="Bragegatan" dotType="Triple" />

        <Stop dotX="2053.7" dotY="1924" labelX="1736.8" labelY="1945.6" labelText="Trädgårdsgatan" dotType="Triple" />

        <Stop dotX="1946" dotY="1677.3" labelX="1670.4" labelY="1699" labelText="Norrmalmsgatan" dotType="Double" />

        <Stop dotX="2668.5" dotY="1184" dotTransform="rotate(45 2668.5 1184)" labelX="2694.3" labelY="1214.3" labelText="Tunadalsvägen" dotType="Double" />

        <Stop dotX="2701" dotY="1139" dotTransform="rotate(25 2701 1139)" labelX="2728.3" labelY="1169" labelText="Tunadalshamnen" dotType="Double" />

        <Stop dotX="2700" dotY="1079" labelX="2728.3" labelY="1101" labelText="Tunadalssågen" dotType="Double" />

        <Stop dotX="1485" dotY="1286.7" dotTransform="rotate(-45 1485 1286.7)" labelX="1265" labelY="1353" labelText="Granloholm C" dotType="Double" />

        <IconTrain />
        <Stop dotX="2053.7" dotY="1960.8" labelX="2093.3" labelY="1985.4" labelText="Tullgatan" dotType="Double" />

        <Stop dotX="2053.7" dotY="1997.6" labelX="2093.3" labelY="2019.4" labelText="Kaptensgatan" dotType="Double" />

        <Stop dotX="2703.8" dotY="996.7" labelX="2728.3" labelY="1035.7" labelText="Alnöbron västra" />

        <Stop dotX="2660.8" dotY="954.7" labelX="2711.3" labelY="956.3" labelText="Augustivägen" />

        <Stop dotX="2256.4" dotY="1343" dotSize="54" labelX="2010" labelY="1364.6" labelText="Trafikgatan" dotType="Double" />

        <Stop dotX="2408.3" dotY="609" labelX="2168.8" labelY="631.7" labelText="Birstatunneln" dotType="Double" />

        <Stop dotX="2408.3" dotY="653" labelX="2177" labelY="719.3" labelText="Gesällvägen" dotType="Double" />

        <Stop dotX="2408.3" dotY="697" labelX="2203.8" labelY="676" labelText="Birsta City" dotType="Double" />

        <Stop dotX="2539.3" dotY="773.3" dotTransform="rotate(90 2539.3 773.3)" labelX="2570" labelY="788.7" labelText="Klökanvägen" dotType="Double" />

        <Stop dotX="2700" dotY="1042.4" labelX="2728.3" labelY="1067" labelText="Fillan" dotType="Double" />

        // TODO: Make this text white
        <Stop dotX="2739" dotY="549" dotSize="46" labelX="2773.7" labelY="573.7" labelText="Östra Birsta" class="white" dotType="Double" />


        <IconArrow x="1150" y="2224"/>
        <IconArrow x="1219" y="2284" transform="rotate(180, 1255, 2284)"/>
        <IconArrow x="830" y="1227" transform="rotate(225, 866, 1241)"/>
        <IconArrow x="921" y="1200" transform="rotate(45, 958, 1113)"/>
      </svg>
    );
  }
}
