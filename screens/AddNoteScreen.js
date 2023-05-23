import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,ToastAndroid } from 'react-native';


const AddNoteScreen = ({ navigation, route }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const { notes, setNotes } = route.params;

  const addNote = () => {
    if (noteTitle.trim() !== '' && noteBody.trim() !== '') {
      const newNote = {
        id: Math.random().toString(),
        title: noteTitle,
        body: noteBody,
      };
      setNotes([...notes, newNote]);
      setNoteTitle('');
      setNoteBody('');
    
      navigation.navigate('Home');

      ToastAndroid.show("Added",ToastAndroid.SHORT,ToastAndroid.BOTTOM);
      

      
     
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={text => setNoteTitle(text)}
        value={noteTitle}
      />
      <TextInput
        style={[styles.input, styles.bodyInput]}
        placeholder="Body..."
        onChangeText={text => setNoteBody(text)}
        value={noteBody}
        multiline
      />
      <Button title="Add" onPress={addNote} color="red" />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    fontSize: 18,
  },
  bodyInput: {
    height: 120,
  },
  addButton: {
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default AddNoteScreen;
