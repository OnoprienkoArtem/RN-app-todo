import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';


export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: '1', textTodo: 'Выучить React Native' }
  ]);

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
    const todo = todos.find(t => t.id === id);
    Alert.alert(
      'Remove todo item',
      `Are you sure, you want to delete '${todo.textTodo}'?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        },
      ],
      { cancelable: false },
    );

  }

  const updateTodo = (id, title) => {
    setTodos(old =>
      old.map(todo => {
        if (todo.id === id) {
          todo.textTodo = title
        }
        return todo;
      })
    )
  }

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={id => {
        setTodoId(id);
      }}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    )
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
