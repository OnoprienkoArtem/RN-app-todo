import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert, Keyboard } from 'react-native';
import { THEME } from '../theme';
import { Entypo } from '@expo/vector-icons';

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
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
            <Entypo.Button onPress={pressHandler} name='add-to-list'>Add</Entypo.Button>
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
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
});
