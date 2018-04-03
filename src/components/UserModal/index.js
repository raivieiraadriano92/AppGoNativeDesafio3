import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'react-redux';

import {
  ActivityIndicator,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

import * as UserModalActions from 'store/actions/userModal';

const UserModal = ({ userModal }) => (
  <Modal
    animationType="slide"
    onRequestClose={() => {
      alert('Modal has been closed.');
    }}
    transparent
    visible={userModal.visible}
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
    </View>
  </Modal>
);

const mapStateToProps = state => ({
  userModal: state.userModal,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserModalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
