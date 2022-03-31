import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import scale from '../../helpers/scale';

const Avatar = ({avatarLink, avatarStyle, onPress, circleStyle}) => {
  const Touch = onPress ? TouchableOpacity : View;
  const [err, setError] = useState(false);

  return (
    <Touch style={[circleStyle]} onPress={onPress && onPress}>
      <Image
        style={[styles.avatar, avatarStyle]}
        onError={() => {
          setError(true);
        }}
        source={
          avatarLink && typeof avatarLink === 'object' && !err
            ? avatarLink
            : avatarLink && !err
            ? avatarLink
            : require('../../assets/user-icon-1.png')
        }
      />
    </Touch>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 60 / scale,
    height: 60 / scale,
    borderRadius: 60 / 2 / scale,
  },
});

export default Avatar;
