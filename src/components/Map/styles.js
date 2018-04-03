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
    maxWidth: 250,
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
});

export default styles;
