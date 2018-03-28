import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Mapbox from '@mapbox/react-native-mapbox-gl';

import 'config/DevToolsConfig';
import 'config/ReactotronConfig';

Mapbox.setAccessToken('pk.eyJ1IjoicmFpdmllaXJhYWRyaWFubzkyIiwiYSI6ImNqZmFpOGlqZTBhdTMycW1zZGRsYzE2YmEifQ.jBNz09mY9gor2_pT2RfT5w');

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={{ flex: 1 }}>
        </Mapbox.MapView>
      </View>
    );
  }
}
