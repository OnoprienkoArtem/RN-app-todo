import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { THEME } from '../theme';

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>{todo.textTodo}</Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='Back' color={THEME.GREY_COLOR} onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button title='Delete' color={THEME.DANGER_COLOR} />
                </View>   
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    }
});