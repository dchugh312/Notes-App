import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, body }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line} />
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15, 
    marginHorizontal: 20, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 21, 
    fontWeight: 'bold',
    marginBottom:2
    
  },
  line: {
    height: 2, 
    backgroundColor: 'red',
    
  },
  body: {
    marginTop:25,
    fontSize: 14,
    color: 'grey', 
  },
});

export default Card;
