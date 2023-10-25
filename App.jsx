/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoList from './src/ToDoList';
import ToDoForm from './src/ToDoForm';


function App() {

const [tasks, setTasks] = useState([
  'Do the laundry',
  'Go to gym',
  'Walk the dog',
  'Self care routine',
  'Study',
]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
