import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  content: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: colors.darker,
    fontSize: 18,
    fontWeight: 'bold',
  },

  input: {
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin * 2,
  },

  containerButtons: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
  },

  button: {
    alignSelf: 'stretch',
    flex: 1,
    height: 42,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },

  buttonCancel: {
    backgroundColor: colors.primary,
  },

  buttonSave: {
    backgroundColor: colors.success,
    marginLeft: 15,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
