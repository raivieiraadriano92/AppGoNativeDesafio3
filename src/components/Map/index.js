import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import UserModal from 'components/UserModal';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as MapActions } from 'store/ducks/map';

Mapbox.setAccessToken('pk.eyJ1IjoicmFpdmllaXJhYWRyaWFubzkyIiwiYSI6ImNqZmFpOGlqZTBhdTMycW1zZGRsYzE2YmEifQ.jBNz09mY9gor2_pT2RfT5w');

class Map extends Component {
  static propTypes = {
    map: PropTypes.shape({
      users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    showUserModal: PropTypes.func.isRequired,
  };

  renderUsers = () => this.props.map.users.map(user => (
    <Mapbox.PointAnnotation
      key={`user_${user.id}`}
      id={`user_${user.id}`}
      coordinate={user.coordinates}
    >
      <View style={styles.containerAvatar}>
        <Image style={styles.avatar} source={{ uri: user.avatar }} />
      </View>

      <Mapbox.Callout>
        <View style={styles.callout}>
          <Text style={styles.calloutTitle}>{user.name}</Text>
          <Text style={styles.calloutSubtitle}>{user.bio}</Text>
        </View>
      </Mapbox.Callout>
    </Mapbox.PointAnnotation>
  ))

  render() {
    return (
      <View style={styles.mapView}>
        <Mapbox.MapView
          centerCoordinate={[-49.645, -27.217]}
          onLongPress={({ geometry: { coordinates } }) => this.props.showUserModal(coordinates)}
          style={styles.mapView}
          styleURL={Mapbox.StyleURL.Street}
          zoomLevel={15}
        >
          {this.renderUsers()}
        </Mapbox.MapView>
        <UserModal />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  map: state.map,
});

const mapDispatchToProps = dispatch => bindActionCreators(MapActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
