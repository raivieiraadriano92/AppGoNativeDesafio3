import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  ActivityIndicator,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

import * as MapActions from 'store/actions/map';

const UserModal = ({ map, hideUserModal }) => (
  <Modal
    animationType="slide"
    onRequestClose={() => {
      alert('Modal has been closed.');
    }}
    transparent
    visible={map.userModalVisible}
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
            onPress={() => hideUserModal()}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSave]}
            onPress={() => { }}
            activeOpacity={0.8}
          >
            {map.saving
              ? <ActivityIndicator size="small" />
              : <Text style={styles.buttonText}>Salvar</Text>}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

UserModal.propTypes = {
  map: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }).isRequired,
  hideUserModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  map: state.map,
});

const mapDispatchToProps = dispatch => bindActionCreators(MapActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
