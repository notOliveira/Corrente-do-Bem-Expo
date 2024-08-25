import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BaseScreen from '../components/BaseScreen';

const DetailsScreen = () => {
  return (
    <BaseScreen title="Details">
      <View style={styles.container}>
        <Text style={styles.text}>This is the Details screen.</Text>
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

export default DetailsScreen;
