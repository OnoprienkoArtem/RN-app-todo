import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';

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

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
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
