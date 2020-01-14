import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.5} 
            onPress={() => console.log('pressed', todo.id)} 
            onLongPress={() => onRemove(todo.id)}>
            <View style={styles.todo}>
                <Text style={styles.text}>{todo.textTodo}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10
    }
});
