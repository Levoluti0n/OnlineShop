import React from 'react';
import {View, Text} from 'react-native';

import colors from '../../helpers/colors';

export default function WalletScreen() {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{color: colors.black}}>Wallet</Text>
    </View>
  );
}
