import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ addTodo, removeTodo, todos }) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            <FlatList
                data={todos}
                renderItem={({ item }) => <Todo key={item.id} todo={item} onRemove={removeTodo} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});