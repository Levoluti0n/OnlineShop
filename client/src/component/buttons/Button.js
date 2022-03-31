import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import colors from '../../helpers/colors';
import scale from '../../helpers/scale';

export default function Button({
  containerStyle,
  labelStyle,
  touchBack,
  onPress,
  label,
  inner,
}) {
  return (
    <View style={touchBack}>
      <TouchableOpacity
        onPress={onPress && onPress}
        style={[styles.container, containerStyle]}>
        {label ? (
          <Text style={[styles.text, labelStyle]}>{label}</Text>
        ) : (
          inner && inner
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10 / scale,
    backgroundColor: colors.softGray,
  },
  text: {
    color: colors.black,
  },
});
