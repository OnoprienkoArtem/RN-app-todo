import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export const AddTodo = (onSubmit) => {

    const pressHandler = () => {
        onSubmit('');
    }


    return (
        <View style={styles.block}>
            <TextInput style={styles.input} />
            <Button style={styles.button} title="Add" onPress={pressHandler} />
        </View>
    );
}



const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    },
    button: {

    }
});
