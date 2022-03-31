import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

import colors from '../../helpers/colors';
import scale from '../../helpers/scale';
import style from './style';

export default function WalletScreen() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colors.pink} />
      <View style={style.WalletHeaderBox}>
        <Text style={style.title}>Wallet</Text>
        <View style={style.walletSumBox}>
          <FontAwesome color={colors.white} size={35 / scale} name="dollar" />
          <Text style={style.walletSum}>24.254</Text>
        </View>
      </View>
      <View style={style.historyBox}>
        <View style={style.historyFormTouch}>
          <TouchableOpacity style={style.historyForm}>
            <Text style={{color: colors.pink}}>Something ... +134$ </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[style.historyForm, {marginTop: 10 / scale}]}>
          <Text style={{color: colors.pink}}>Something ... +900$</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView> //#4C56C0
  );
}
