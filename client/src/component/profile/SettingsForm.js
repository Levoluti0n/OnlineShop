import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
IonIcon.loadFont();
Entypo.loadFont();
Icon.loadFont();

import colors from '../../helpers/colors';
import scale from '../../helpers/scale';

export default function SettingsForm({options}) {
  const size = useRef(new Animated.Value(0.1)).current;
  const progress = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(progress, {
      toValue: 1,
      duration: 550,
      useNativeDriver: true,
    }).start();
    Animated.spring(size, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <FlatList
      data={options && options}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <Text style={[styles.title, {color: colors.green}]}>
              {item?.title}
            </Text>
            <View style={styles.optionsBox}>
              <FlatList
                numColumns={4}
                data={item?.options}
                columnWrapperStyle={{justifyContent: 'space-around'}}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity style={styles.optionForm}>
                      <Animated.View
                        style={[
                          styles.formCircle,
                          {
                            opacity: progress,
                            borderRadius: progress.interpolate({
                              inputRange: [0, 1],
                              outputRange: [
                                (0.5 * 70) / 2 / scale,
                                (1 * 70) / 2 / scale,
                              ],
                            }),
                            transform: [{scale: size}],
                          },
                        ]}>
                        <item.Icon
                          size={33 / scale}
                          color={colors.green}
                          name={item?.iconName}
                        />
                      </Animated.View>
                      <Text style={styles.optionsName}>{item?.name}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20 / scale,
    paddingVertical: 10 / scale,
    paddingHorizontal: 15 / scale,
    backgroundColor: colors.white,
  },
  title: {
    fontWeight: '700',
    fontSize: 19 / scale,
  },
  optionsBox: {
    marginTop: 10 / scale,
  },
  formCircle: {
    width: 70 / scale,
    height: 70 / scale,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.softGray,
  },
  optionForm: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsName: {
    color: colors.green,
    marginTop: 5 / scale,
    fontSize: 13 / scale,
  },
});
