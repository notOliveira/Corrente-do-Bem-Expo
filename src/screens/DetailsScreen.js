import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>DETAILS SCREEN!</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Organization"
        onPress={() => navigation.navigate('Organization', { id: 1 })}
      />
    </View>
  );
};

export default DetailsScreen;