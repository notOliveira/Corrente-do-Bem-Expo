import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const BaseScreen = ({ title, children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {children}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Content</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#333',
  },
});

export default BaseScreen;
