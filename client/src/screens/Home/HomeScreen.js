import React from 'react';
import {
  View,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import TextInput from '../../component/inputs/TextInput';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
IonIcon.loadFont();
Entypo.loadFont();

import colors from '../../helpers/colors';
import scale from '../../helpers/scale';
import style from './style';

export default function HomeScreen() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colors.green} />
      <View style={style.homeHeader}>
        <View style={style.homeHeaderBox}>
          <TouchableOpacity>
            <Entypo color={colors.white} size={30 / scale} name="menu" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                width: 200 / scale,
                height: 35 / scale,
                tintColor: 'white',
              }}
              source={require('../../assets/logo.png')}
            />
          </TouchableOpacity>
          <View style={{width: 30 / scale}}></View>
        </View>
      </View>
      <View style={style.searchBox}>
        <View style={style.inputBox}>
          <TextInput
            placeholder={'search'}
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
    </SafeAreaView>
  );
}
