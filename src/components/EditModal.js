import React from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

export const EditModal = ({ visible, onCancel }) => {
    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input} />
                <Button title='cancel' onPress={onCancel}/>
                <Button title='save' />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        
    }
});