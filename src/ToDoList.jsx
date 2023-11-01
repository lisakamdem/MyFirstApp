import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';

function ToDoList({ tasks, markTaskAsCompleted, completedTasks }) {
  return (
    <>
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index} onPress={() => markTaskAsCompleted(index)}>
            <View style={styles.task}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
        {completedTasks.map((task, index) => (
          <Pressable key={index}>
            <View style={[styles.task, styles.completed]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
