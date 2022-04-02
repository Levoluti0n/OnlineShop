import {StyleSheet} from 'react-native';

import colors from '../../helpers/colors';
import scale from '../../helpers/scale';

export default StyleSheet.create({
  headerBox: {
    height: 70 / scale,
    backgroundColor: colors.green,
    paddingHorizontal: 20 / scale,
  },
  headerTitle: {
    fontWeight: '700',
    color: colors.white,
    fontSize: 21 / scale,
  },
  optionsBox: {
    paddingHorizontal: 20 / scale,
    paddingBottom: 160 / scale,
  },
  container: {
    flex: 1,
  },
  chatBox: {
    height: 80 / scale,
    borderRadius: 18 / scale,
    backgroundColor: colors.white,
  },
  inputBox: {
    alignItems: 'center',
    marginTop: -22 / scale,
  },
  inputContainer: {
    width: '85%',
    paddingHorizontal: 0,
    paddingVertical: 6 / scale,
    backgroundColor: 'transparent',
  },
  inputIcon: {
    padding: 5,
    borderRadius: 30 / 2,
    backgroundColor: colors.green,
  },
  input: {
    width: '70%',
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25 / scale,
    paddingHorizontal: 8 / scale,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
});
