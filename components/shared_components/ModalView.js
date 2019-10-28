import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';

export default class ModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: props.modalVisible
    };
  }

  setModalVisible(visible) {
    this.setState({ isModalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal animationType="slide" transparent={false} visible={this.state.isModalVisible}>
          <TouchableOpacity
            style={modalStyle.buttonContainer}
            onPress={() => {
              this.props.hideModal();
            }}>
            <Text style={modalStyle.buttonText}>Close</Text>
          </TouchableOpacity>
          <View style={modalStyle.container}>
            <View style={modalStyle.innerContainer}>{this.props.view}</View>
          </View>
        </Modal>
      </View>
    );
  }
}

ModalView.propTypes = {
  hideModal: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  view: PropTypes.any.isRequired
};

const modalStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 25
  }
});
