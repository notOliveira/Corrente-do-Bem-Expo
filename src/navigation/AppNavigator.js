import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LinkingOptions } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import OrganizationScreen from '../screens/OrganizationScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const linking = {
  prefixes: ['http://localhost:8081', 'myapp://'],
  config: {
    screens: {
      Home: '/',
      Organization: 'organizations/:id',
      Details: 'details/',
      About: 'about/',
    },
  },
};

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }} // Oculta o botão de voltar na tela Home
    />
    <Stack.Screen
      name="Organization"
      component={OrganizationScreen}
      options={{ headerShown: false }} // Oculta o botão de voltar na tela Organization
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{ headerShown: false }} // Oculta o botão de voltar na tela Details
    />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={StackNavigator} />
    <Drawer.Screen name="About" component={AboutScreen} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer linking={linking}>
    <DrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;
