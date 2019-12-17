import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import ProfileIcon from '../components/shared_components/ProfileIcon';
import StyledText from '../components/shared_components/Typography';
import ProfileView from '../components/shared_components/ProfileView';
import ModalView from '../components/shared_components/ModalView';

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  hideMyModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const view = <ProfileView userId="83f01955-2064-4da1-9b7e-efd081ee037d" />;
    return (
      <View style={styles.header}>
        <StyledText textType="head" text="saltwater classroom" fontColor="tidepool" />

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <ProfileIcon />
        </TouchableOpacity>

        {this.state.modalVisible && (
          <ModalView
            view={view}
            modalVisible={this.state.modalVisible}
            hideModal={this.hideMyModal}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 1,
    borderColor: 'black'
  },
  toolbarTitle: {
    fontWeight: 'bold',
    flex: 1
  },
  closeButton: {
    marginTop: 50
  }
});
