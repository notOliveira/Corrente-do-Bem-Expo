import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BaseScreen from '../components/BaseScreen';

const HomeScreen = ({ route, navigation }) => {
  return (
    <BaseScreen title="Home Screen">
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Home Screen!</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        
        <View style={{ height: 20 }} />

        <Button
          title="Go to Organization"
          onPress={() => navigation.navigate('Organization', { id: 1 })}
        />
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;
