import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
  callout: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    width: 250,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.darker,
  },
  calloutSubtitle: {
    fontSize: 12,
    color: colors.regular,
  },
  containerAvatar: {
    borderRadius: 32,
    padding: 5,
    backgroundColor: colors.white,
  },
  avatar: {
    width: 37,
    height: 37,
    borderRadius: 32,
  },
});

export default styles;
