import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import EditProfile from '../screens/Edit/EditProfile';

export default function UserNavigation() {
  const User = createStackNavigator();
  return (
    <User.Navigator
      screenOptions={{
        header: () => null,
        gestureEnabled: true,
        presentation: 'modal',
        gestureDirection: 'vertical',
      }}>
      <User.Screen name={'Tabs'} component={TabNavigator} />
      <User.Screen name={'Modal'} component={EditProfile} />
    </User.Navigator>
  );
}
