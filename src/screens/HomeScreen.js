import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Organization"
        onPress={() => navigation.navigate('Organization', { id: 1 })}
      />
    </View>
  );
};

export default HomeScreen;