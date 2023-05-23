import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>Notes App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
