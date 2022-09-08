import { sixtyFivePercentWidth } from '@configs/constants';
import { colors } from '@configs/globalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['mwr/white'],
  },
  XGeoShape: {
    left: sixtyFivePercentWidth,
  },
  appTitleView: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 33,
    alignItems: 'center',
  },
  logo: {
    marginTop: 35,
    alignSelf: 'center',
  },
  shortText: {
    width: 193,
    marginTop: 15,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
  bookmark: {
    marginLeft: 9,
  },
  appNameText: {
    fontSize: 24,
  },
  sideGeoShapes: {
    left: 2,
    bottom: 4,
    position: 'absolute',
  },
});
