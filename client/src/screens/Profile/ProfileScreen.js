import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
IonIcon.loadFont();
Entypo.loadFont();
Icon.loadFont();

import Button from '../../component/buttons/Button';
import Avatar from '../../component/Avatar/Avatar';
import colors from '../../helpers/colors';
import scale from '../../helpers/scale';
import style from './style';

const Options = {
  Wallet: {
    name: 'Wallet',
    Type: IonIcon,
    icon: 'ios-wallet-outline',
  },
  Address: {
    Type: Entypo,
    name: 'Address',
    icon: 'location-pin',
  },
};

export default function ProfileScreen() {
  const navigation = useNavigation();
  const OptionsForm = ({name, Type, icon}) => {
    return (
      <View style={style.optionsForm}>
        <Type size={50 / scale} color={colors.green} name={icon && icon} />
        <Text style={style.optionsFormText}>{name && name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colors.green} />
      <View style={style.header}>
        <Text style={style.title}>Settings</Text>
        <View style={style.avatarBox}>
          <View style={style.avatarBoxLeft}>
            <Avatar avatarStyle={style.avatar} />
            <View style={style.userInfo}>
              <Text style={style.nickName}>@johndoe</Text>
              <Text style={style.fullName}>John Doe</Text>
            </View>
          </View>
          <TouchableOpacity
            style={style.avatarBoxRight}
            onPress={() => navigation.push('Modal')}>
            <Icon color={colors.green} size={25 / scale} name="pencil" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.bottom}>
        <View style={style.optionsBox}>
          <Button
            touchBack={style.touchBack}
            containerStyle={style.butContainer}
            inner={OptionsForm(Options.Wallet)}
            onPress={() => navigation.push('Wallet')}
          />
          <Button
            touchBack={style.touchBack}
            containerStyle={style.butContainer}
            inner={OptionsForm(Options.Address)}
            onPress={() => navigation.push('Address')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
