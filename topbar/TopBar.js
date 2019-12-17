/* eslint global-require: 0 */

import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

import ProfileIcon from '../components/shared_components/ProfileIcon';
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
        <Image
          source={require('../assets/images/topbarIcon.png')}
          style={styles.topbarTitle}
          resizeMode="contain"
        />

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.profileIcon}>
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
    alignItems: 'center',
    alignContent: 'space-between'
  },
  profileIcon: {
    paddingRight: 20
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 1,
    borderColor: 'black'
  },
  topbarTitle: {
    alignSelf: 'center',
    height: 60,
    width: 200,
    flex: 1
  },
  closeButton: {
    marginTop: 50
  }
});
