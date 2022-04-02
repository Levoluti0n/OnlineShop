import React from 'react';
import {View} from 'react-native';

import scale from '../../helpers/scale';

export default function Separator({separatorStyle}) {
  return (
    <View
      style={{
        height: 8 / scale,
        ...separatorStyle,
      }}></View>
  );
}
