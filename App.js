import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';


export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = textTodo => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        textTodo
      }
    ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
