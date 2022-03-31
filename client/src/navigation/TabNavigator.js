import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
Ionicons.loadFont();
MaterialCommunityIcons.loadFont();

import ProfileScreen from '../screens/Profile/ProfileScreen';
import AddressScreen from '../screens/Address/AddressScreen';
import WalletScreen from '../screens/Wallet/WalletScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import scale from '../helpers/scale.js';
import colors from '../helpers/colors';

const tabOptions = {
  Home: {
    name: 'Home',
    icon: Ionicons,
    active: 'ios-home',
    inActive: 'ios-home-outline',
  },
  Like: {
    name: 'Favorites',
    icon: Ionicons,
    active: 'ios-heart',
    inActive: 'ios-heart-outline',
  },
  Bag: {
    icon: Ionicons,
    center: 'center',
    active: 'ios-cart',
    inActive: 'ios-cart-outline',
  },
  Orders: {
    name: 'Orders',
    icon: Ionicons,
    active: 'ios-gift',
    inActive: 'ios-gift-outline',
  },
  Profile: {
    name: 'Me',
    icon: Ionicons,
    active: 'ios-person',
    inActive: 'ios-person-outline',
  },
};
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const tabBar = (focused, options) => {
    return (
      <View
        style={[
          {justifyContent: 'center', alignItems: 'center'},
          options.center && {
            padding: 24 / scale,
            alignItems: 'center',
            marginTop: -40 / scale,
            borderWidth: 5 / scale,
            justifyContent: 'center',
            borderColor: colors.green, //'#73C68C'
            backgroundColor: focused ? '#9FE2B7' : colors.white,
            borderRadius: 100 / 2 / scale,
          },
        ]}>
        <options.icon
          size={30 / scale}
          color={focused ? colors.white : colors.inActive}
          name={focused ? options.active : options.inActive}
        />
        {!options.center && (
          <Text style={{color: focused ? colors.white : colors.inActive}}>
            {options.name}
          </Text>
        )}
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70 / scale,
          position: 'absolute',
          backgroundColor: colors.green,
          borderTopLeftRadius: 25 / scale,
          borderTopRightRadius: 25 / scale,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => null,
          tabBarIcon: ({focused}) => tabBar(focused, tabOptions.Home),
        }}
      />
      <Tab.Screen
        name="Like"
        component={HomeScreen}
        options={{
          header: () => null,
          tabBarIcon: ({focused}) => tabBar(focused, tabOptions.Like),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={HomeScreen}
        options={{
          header: () => null,
          tabBarIcon: ({focused}) => tabBar(focused, tabOptions.Bag),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={HomeScreen}
        options={{
          header: () => null,
          tabBarIcon: ({focused}) => tabBar(focused, tabOptions.Orders),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          header: () => null,
          tabBarIcon: ({focused}) => tabBar(focused, tabOptions.Profile),
        }}
      />
    </Tab.Navigator>
  );
}
const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ProfileScreen'}
      screenOptions={{
        header: () => null,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
      <Stack.Screen name={'Wallet'} component={WalletScreen} />
      <Stack.Screen name={'Address'} component={AddressScreen} />
    </Stack.Navigator>
  );
};
