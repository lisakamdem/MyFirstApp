'use client';
import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button, Alert
  } from 'react-native';

function ToDoForm({onAddTask}) {
  const [taskTest, setTaskText] = React.useState('');


  const handleAddTask = () => {
    // Pass the current taskTest value to the parent component
    onAddTask(taskTest);

    // Optionally, clear the input field
    setTaskText('');
  };


  return(
    <>
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskTest}
        />
        <Button title="Add" onPress={handleAddTask}/>

      </View>
    </>

  );
}

const styles = StyleSheet.create({
   
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoForm;