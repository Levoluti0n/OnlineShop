import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import UserNavigation from './src/navigation/UserNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <UserNavigation />
    </NavigationContainer>
  );
}
