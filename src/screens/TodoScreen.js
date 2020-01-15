import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { THEME } from '../theme';
import { AppCard } from '../components/ui/AppCard';

export const TodoScreen = ({ goBack, todo, onRemove }) => {
    const [modal, setModal] = useState(false);

    return (
        <View>            
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.textTodo}</Text>
                <Button title='Edit' onPress={() => setModal(true)} />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='Back' color={THEME.GREY_COLOR} onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button title='Delete' color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)} />
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
    },
    title: {
        fontSize: 16
    },
    card: {
        marginBottom: 20,
        padding: 10
    }
});