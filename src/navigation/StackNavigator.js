import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LinkingOptions } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import OrganizationScreen from '../screens/OrganizationScreen';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['http://localhost:8081', 'myapp://'],
  config: {
    screens: {
      Home: '',
      Organization: 'organizations/:id',
      Profile: 'profile/:id',
    },
  },
};

const StackNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Organization" component={OrganizationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;