import React from 'react';
import { Modal, Text, View } from 'react-native';
import styles from './styles';

const UserModal = () => (
  <Modal
    animationType="slide"
    onRequestClose={() => {
      alert('Modal has been closed.');
    }}
    transparent
  >
    <View style={styles.container}>
      <Text>Hello World!asd</Text>
    </View>
  </Modal>
);

export default UserModal;
