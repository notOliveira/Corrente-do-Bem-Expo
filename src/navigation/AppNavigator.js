import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const CustomDrawerContent = (props) => {
  // Não use useNavigation ou useRoute aqui
  // Utilize props.navigation e props.state para navegação e informações de rota

  return (
    <View style={styles.drawerContent}>
      <Text style={styles.title}>Navigation Drawer</Text>
      <Button
        title="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button
        title="About"
        onPress={() => props.navigation.navigate('About')}
      />
    </View>
  );
};

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="HomeStack" component={StackNavigator} options={{ title: 'Home' }} />
    <Drawer.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default AppNavigator;
