import {StyleSheet} from 'react-native';

import colors from '../../helpers/colors';
import scale from '../../helpers/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  homeHeader: {
    alignItems: 'center',
    paddingVertical: 40 / scale,
    backgroundColor: colors.green,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 55 / scale,
    borderBottomRightRadius: 55 / scale,
  },
  homeHeaderBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30 / scale,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
    color: colors.white,
    fontSize: 30 / scale,
  },
  inputBox: {
    width: '70%',
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25 / scale,
    paddingHorizontal: 8 / scale,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '85%',
    paddingHorizontal: 0,
    paddingVertical: 6 / scale,
    backgroundColor: 'transparent',
  },
  searchBox: {
    alignItems: 'center',
    marginTop: -22 / scale,
  },
  inputIcon: {
    padding: 5,
    borderRadius: 30 / 2,
    backgroundColor: colors.green,
  },
});
