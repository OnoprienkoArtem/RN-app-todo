import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Empty input!');
        }      
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder='todo text'
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Button title='Add' onPress={pressHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        width: '80%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
});
