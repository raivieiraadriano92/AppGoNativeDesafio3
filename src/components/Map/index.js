import React from 'react';
import { View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import UserModal from 'components/UserModal';
import styles from './styles';

Mapbox.setAccessToken('pk.eyJ1IjoicmFpdmllaXJhYWRyaWFubzkyIiwiYSI6ImNqZmFpOGlqZTBhdTMycW1zZGRsYzE2YmEifQ.jBNz09mY9gor2_pT2RfT5w');

const Map = () => (
  <View style={styles.mapView}>
    <Mapbox.MapView
      centerCoordinate={[-49.645, -27.217]}
      onLongPress={({ geometry: { coordinates } }) => console.log(coordinates)}
      style={styles.mapView}
      styleURL={Mapbox.StyleURL.Street}
      zoomLevel={15}
    />
    <UserModal />
  </View>
);

export default Map;
