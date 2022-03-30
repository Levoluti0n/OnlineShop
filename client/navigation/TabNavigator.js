import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
Ionicons.loadFont();
MaterialCommunityIcons.loadFont();

import HomeScreen from '../screens/Home/HomeScreen';
import scale from '../helpers/scale.js';
import colors from '../helpers/colors';

const tabOptions = {
  Home: {
    icon: Ionicons,
    active: 'ios-home',
    inActive: 'ios-home-outline',
  },
  Like: {
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
    icon: Ionicons,
    active: 'ios-gift',
    inActive: 'ios-gift-outline',
  },
  Profile: {
    icon: Ionicons,
    active: 'ios-person',
    inActive: 'ios-person-outline',
  },
};

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  const tabBar = (focused, options) => {
    return (
      <View
        style={
          options.center && {
            padding: 24 / scale,
            alignItems: 'center',
            marginTop: -40 / scale,
            borderWidth: 5 / scale,
            justifyContent: 'center',
            borderColor: colors.green, //'#73C68C'
            backgroundColor: focused ? '#9FE2B7' : colors.white,
            borderRadius: 100 / 2 / scale,
          }
        }>
        <options.icon
          size={30 / scale}
          color={focused ? colors.white : colors.inActive}
          name={focused ? options.active : options.inActive}
        />
      </View>
    );
  };
  // const func = ({route}) => ({
  //   tabBarIcon: ({focused, color, size}) => {
  //     let iconName;

  //     if (route.name === 'Home') {
  //       iconName = focused
  //         ? 'ios-information-circle'
  //         : 'ios-information-circle-outline';
  //     } else if (route.name === 'Settings') {
  //       iconName = focused ? 'ios-list-box' : 'ios-list';
  //     }

  //     // You can return any component that you like here!
  //     return <Ionicons name={iconName} size={size} color={color} />;
  //   },
  //   tabBarActiveTintColor: 'tomato',
  //   tabBarInactiveTintColor: 'gray',
  // });
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
        component={HomeScreen}
        options={{
          header: () => null,
          tabBarIcon: ({focused}) => tabBar(focused, tabOptions.Profile),
        }}
      />
    </Tab.Navigator>
  );
}
