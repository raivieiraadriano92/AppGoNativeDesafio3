import React, { Component } from 'react';
import {
  ActivityIndicator,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

export default class UserModal extends Component {
  state = {
    user: null,
    visible: true,
  };

  render() {
    return (
      <Modal
        animationType="slide"
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}
        transparent
        visible={this.state.visible}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Adicionar novo local</Text>

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Usuário no Github"
              underlineColorAndroid="transparent"
            />

            <View style={styles.containerButtons}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={() => { }}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonSave]}
                onPress={() => { }}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Usuário no Github"
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => { }}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { }}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </Modal>
    );
  }
}
