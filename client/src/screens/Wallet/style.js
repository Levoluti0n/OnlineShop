import {StyleSheet} from 'react-native';

import colors from '../../helpers/colors';
import scale from '../../helpers/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  WalletHeaderBox: {
    paddingTop: 40 / scale,
    paddingVertical: 100 / scale,
    backgroundColor: colors.pink,
    paddingHorizontal: 25 / scale,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 15 / scale,
    borderBottomRightRadius: 15 / scale,
  },
  title: {
    fontWeight: '700',
    color: colors.white,
    fontSize: 25 / scale,
  },
  walletSumBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25 / scale,
    paddingHorizontal: 15 / scale,
  },
  walletSum: {
    fontWeight: '700',
    color: colors.white,
    fontSize: 34 / scale,
    marginLeft: 10 / scale,
  },
  historyForm: {
    elevation: 2,
    height: 90 / scale,
    borderRadius: 8 / scale,
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 10 / scale,
  },
  historyFormTouch: {
    backgroundColor: colors.softGray,
    borderRadius: 8 / scale,
  },
  historyBox: {
    marginTop: -45 / scale,
    paddingHorizontal: 20 / scale,
  },
});
