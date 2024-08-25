// DetailsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BaseScreen from '../components/BaseScreen';

const DetailsScreen = ({ navigation }) => {
  return (
    <BaseScreen title="Details Screen">
      <View style={styles.container}>
        <Text style={styles.text}>This is the Details Screen.</Text>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
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

export default DetailsScreen;
