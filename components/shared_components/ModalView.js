import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, Modal, SafeAreaView } from 'react-native';

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
      <SafeAreaView style={{ position: 'relative', top: 0 }}>
        <Modal animationType="slide" transparent visible={this.state.isModalVisible}>
          <SafeAreaView style={modalStyle.container}>
            <SafeAreaView style={modalStyle.innerContainer}>
              <SafeAreaView style={modalStyle.buttonContainer}>
                <TouchableOpacity
                  style={modalStyle.buttonContainer}
                  onPress={() => {
                    this.props.hideModal();
                  }}>
                  <Text style={modalStyle.buttonText}>Close</Text>
                </TouchableOpacity>
              </SafeAreaView>

              {this.props.view}
            </SafeAreaView>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
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
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    borderColor: 'rgba(0, 0, 0, 0.54)',
    marginTop: 0
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    marginTop: 25
  },
  buttonContainer: {
    marginTop: 25,
    marginRight: 15,
    alignSelf: 'flex-end'
  }
});
