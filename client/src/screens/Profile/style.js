import {StyleSheet} from 'react-native';

import colors from '../../helpers/colors';
import scale from '../../helpers/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 75 / scale,
    height: 75 / scale,
    borderRadius: 100 / 2,
  },
  avatarBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40 / scale,
    justifyContent: 'space-between',
  },
  avatarBoxLeft: {
    flexDirection: 'row',
  },
  avatarBoxRight: {
    // borderColor: colors.white,
    // borderWidth: 1 / scale,
    borderRadius: 35 / scale,
    backgroundColor: colors.white,
    padding: 5 / scale,
  },
  header: {
    paddingTop: 15 / scale,
    paddingVertical: 100 / scale,
    backgroundColor: colors.green,
    paddingHorizontal: 25 / scale,
  },
  title: {
    fontWeight: '700',
    fontSize: 25 / scale,
    color: colors.white,
  },
  userInfo: {
    marginLeft: 10 / scale,
    justifyContent: 'center',
  },
  nickName: {
    color: colors.white,
    fontSize: 12 / scale,
  },
  fullName: {
    fontWeight: '600',
    color: colors.white,
    fontSize: 18 / scale,
  },
  bottom: {
    flex: 1,
    marginTop: -35 / scale,
    paddingVertical: 40 / scale,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40 / scale,
    borderTopRightRadius: 40 / scale,
  },
  optionsBox: {
    flexDirection: 'row',
    marginTop: -65 / scale,
    justifyContent: 'space-evenly',
  },
  butContainer: {
    width: 150 / scale,
    height: 150 / scale,
    alignItems: 'center',
    borderWidth: 6 / scale,
    borderRadius: 25 / scale,
    justifyContent: 'center',
    borderColor: colors.green,
  },
  touchBack: {
    borderRadius: 20 / scale,
    backgroundColor: colors.green,
  },
  optionsForm: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsFormText: {
    color: colors.green,
  },
});
