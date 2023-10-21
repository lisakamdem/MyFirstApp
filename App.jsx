/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
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
  return (
    <SafeAreaView>

    <ToDoList />
    <ToDoForm />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
