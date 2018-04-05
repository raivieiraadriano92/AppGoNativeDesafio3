import React, { Component } from 'react';
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

import { Creators as MapActions } from 'store/ducks/map';

class UserModal extends Component {
  static propTypes = {
    map: PropTypes.shape({
      users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
      userModalVisible: PropTypes.bool.isRequired,
      saving: PropTypes.bool.isRequired,
      errorOnSave: PropTypes.oneOfType(PropTypes.string, null),
    }).isRequired,
    saveUserRequest: PropTypes.func.isRequired,
    hideUserModal: PropTypes.func.isRequired,
  };

  state = {
    userNameInput: '',
  };

  save = () => {
    if (!this.state.userNameInput.length) return;

    this.props.saveUserRequest(this.state.userNameInput);
  }

  render() {
    return (
      <Modal
        animationType="slide"
        onRequestClose={() => {}}
        onShow={() => this.setState({ userNameInput: '' })}
        transparent
        visible={this.props.map.userModalVisible}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Adicionar novo local</Text>

            {!!this.props.map.errorOnSave && (
              <View style={styles.error}>
                <Text style={styles.errorText}>{this.props.map.errorOnSave}</Text>
              </View>
            )}

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Usuário no Github"
              underlineColorAndroid="transparent"
              value={this.state.userNameInput}
              onChangeText={userNameInput => this.setState({ userNameInput })}
            />

            <View style={styles.containerButtons}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={() => this.props.hideUserModal()}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonSave]}
                onPress={this.save}
                activeOpacity={0.8}
              >
                {this.props.map.saving
                  ? <ActivityIndicator size="small" />
                  : <Text style={styles.buttonText}>Salvar</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  map: state.map,
});

const mapDispatchToProps = dispatch => bindActionCreators(MapActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
