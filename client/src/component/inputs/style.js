import {StyleSheet} from 'react-native';

import colors from '../../helpers/colors';
import scale from '../../helpers/scale';

export default StyleSheet.create({
  container: {
    padding: 20 / scale,
    flexDirection: 'row',
    borderRadius: 12 / scale,
    backgroundColor: colors.gray,
  },
  input: {
    paddingVertical: 0,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15 / scale,
    lineHeight: 18 / scale,
    letterSpacing: 0 / scale,
  },
  select: {
    padding: 5 / scale,
    justifyContent: 'center',
    borderRadius: 12 / scale,
    backgroundColor: colors.gray,
  },
  itemStyle: {
    color: colors.gray,
    height: 40 / scale,
    paddingVertical: 0,
    fontSize: 15 / scale,
    lineHeight: 18 / scale,
  },
  iosSelect: {
    padding: 5 / scale,
  },
  year: {
    flex: 1,
    padding: 5 / scale,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  month: {
    flex: 1,
    borderRadius: 0,
    marginRight: 1.5 / scale,
  },
  day: {
    flex: 1,
    borderTopRightRadius: 0,
    marginRight: 1.5 / scale,
    borderBottomRightRadius: 0,
  },
  postTypeBox: {
    padding: 15 / scale,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15 / scale,
    borderRadius: 15 / scale,
  },
  typeName: {
    marginLeft: 10 / scale,
  },
});
