import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Todo = ({ todo }) => {
    return (
        <View style={styles.todo}>
            <Text style={styles.text}>{todo.textTodo}</Text>
        </View>
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
