import React, { Component } from 'react';
import IconTrain from 'components/icons/Train';

import Stop from 'components/stop/Stop';
import Main from 'components/stop/Main';
import Line1 from 'components/lines/Line-1';
import Line2 from 'components/lines/Line-2';
import Line3 from 'components/lines/Line-3';
import Line4 from 'components/lines/Line-4';
import Line5 from 'components/lines/Line-5';

export default class App extends Component {
  render () {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3687 2979">
        <Line1></Line1>

        <Line2></Line2>

        <Line3></Line3>

        <Line4></Line4>

        <Line5></Line5>

        <Main></Main>

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
      </svg>
    );
  }
}
