import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, Button } from 'react-native';
import ToDoList from '../ToDoList';
import ToDoForm from '../ToDoForm';

function Home({ navigation}) {
    const [tasks, setTasks] = useState([
        'Do the laundry',
        'Go to gym',
        'Walk the dog',
        'Self care routine',
        'Study',
      ]);
    
      const [completedTasks, setCompletedTasks] = useState([]);
    
      const handleAddTask = (task) => {
        if (tasks.includes(task)) {
          Alert.alert('Task already exists', 'Please enter a new task', [
            { text: 'Understood', style: 'cancel' }
          ]);
        } else {
          setTasks([...tasks, task]);
        }
      };
    
      const markTaskAsCompleted = (taskIndex) => {
        const taskToMark = tasks[taskIndex];
        const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    
        // Add the completed task to the completedTasks array
        setCompletedTasks([...completedTasks, taskToMark]);
    
        // Update the tasks state without the completed task
        setTasks(updatedTasks);
      };
    
  return (
    <>
        <SafeAreaView>
            <ToDoList tasks={tasks} markTaskAsCompleted={markTaskAsCompleted} completedTasks={completedTasks} />
            <ToDoForm onAddTask={handleAddTask} />
            <Button title='Go to about' onPress={() => navigation.navigate('About')}/>
        </SafeAreaView>
    </>
  );
}

export default Home;