import React from 'react';
import { View, Text } from 'react-native';

const OrganizationScreen = ({ route }) => {
  // Recebendo o parâmetro 'id' da rota
  const { id } = route.params;

  return (
    <View>
      <Text>Organization ID: {id}</Text>
      {/* Renderize aqui os dados da organização usando o ID */}
    </View>
  );
};

export default OrganizationScreen;