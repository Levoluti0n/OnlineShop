import React, {useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Animated,
  Touchable,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
IonIcon.loadFont();

import Separator from '../../component/separator/Separator';
import TextInput from '../../component/inputs/TextInput';
import colors from '../../helpers/colors';
import scale from '../../helpers/scale';
import style from './style';

const data = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
  'Item 11',
  'Item 12',
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
  'Item 11',
  'Item 12',
];

const ITEM_SIZE = 26.5 * 3;

export default function ChatScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerBox}>
        <Text style={style.headerTitle}>Chat</Text>
      </View>
      <View style={style.inputBox}>
        <View style={style.input}>
          <TextInput
            placeholder={'search...'}
            textColor={colors.black}
            placeholderColor={colors.gray}
            containerStyle={style.inputContainer}
          />
          <TouchableOpacity>
            <IonIcon
              size={20 / scale}
              color={colors.white}
              style={style.inputIcon}
              name="ios-search-outline"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.optionsBox}>
        <Animated.FlatList
          ItemSeparatorComponent={Separator}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          data={data}
          renderItem={({item, index}) => {
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ];
            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });
            const opacityRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 3),
            ];
            const opacity = scrollY.interpolate({
              inputRange: opacityRange,
              outputRange: [1, 1, 1, 0],
            });

            return (
              <TouchableOpacity style={{marginTop: !index ? 10 : 0}}>
                <Animated.View
                  style={[
                    style.chatBox,
                    {transform: [{scale}], opacity: opacity},
                  ]}>
                  <Text style={{color: colors.green}}>{item}</Text>
                </Animated.View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
