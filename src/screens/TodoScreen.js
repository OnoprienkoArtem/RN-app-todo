import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const TodoScreen = ({goBack, todo}) => {
    return (
        <View>
            <Text>{todo.textTodo}</Text>
            <Button title='Back' onPress={goBack}></Button>
        </View>
    );
}

const styles = StyleSheet.create({

});