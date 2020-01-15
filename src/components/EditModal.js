import React from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

export const EditModal = ({ }) => {
    return (
        <Modal>
            <View>
                <TextInput />
                <Button title='cancel' />
                <Button title='save' />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({

});