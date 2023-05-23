import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Card from './Card';
import Header from './header';

import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1', body: 'This is the body of Note 1 eeeeeeeeeeeee' },
    { id: 2, title: 'Note 2', body: 'This is the body of Note 2' },
    { id: 3, title: 'Note 3', body: 'This is the body of Note 3' },
  ]);

  const navigation = useNavigation();

  const addNote = () => {
    navigation.navigate('Add Note', { notes: notes, setNotes: setNotes });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <Header />
      </SafeAreaView>
      
      <View style={styles.content}>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <Card title={item.title} body={item.body} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={addNote}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
  },
});

export default HomeScreen;
