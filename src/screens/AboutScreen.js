import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BaseScreen from '../components/BaseScreen';

const AboutScreen = () => {
  return (
    <BaseScreen title="About Us">
      <View style={styles.container}>
        <Text style={styles.text}>This is the About Us screen.</Text>
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
  },
});

export default AboutScreen;
