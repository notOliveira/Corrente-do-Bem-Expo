import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BaseScreen from '../components/BaseScreen';

const OrganizationScreen = ({ navigation, route }) => {

  const { id } = route.params;

  return (
    <BaseScreen title="Organization Screen">
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Organization Screen!</Text>

        <View style={{ height: 20 }} />
        
        <Text>Organization ID: {id}</Text>

        <View style={{ height: 20 }} />

        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        
        <View style={{ height: 20 }} />

        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
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

export default OrganizationScreen;
