import { colors } from '@configs/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 80,
    right: 18,
  },
  mainText: {
    fontSize: 32,
    color: colors['mwr/purple'],
  },
  subText: {
    fontSize: 14,
  },
  signInText: {
    marginLeft: 4,
    color: colors['mwr/purple'],
  },
  subTextView: {
    flexDirection: 'row',
  },
});
