import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import OnboardingAvatarItem from './OnboardingAvatarItem';

/* eslint global-require: 0 */

export default class OnboardingAvatarGrid extends Component {
  render() {
    return (
      <Grid>
        <Col style={styles.col}>
          <OnboardingAvatarItem source={require('../../assets/images/avatars/crab.png')} />
          <OnboardingAvatarItem source={require('../../assets/images/avatars/dolphin.png')} />
          <OnboardingAvatarItem source={require('../../assets/images/avatars/eel.png')} />
          <OnboardingAvatarItem source={require('../../assets/images/avatars/fish.png')} />
        </Col>
        <Col style={styles.col}>
          <OnboardingAvatarItem source={require('../../assets/images/avatars/hammerhead.png')} />
          <OnboardingAvatarItem source={require('../../assets/images/avatars/jellyfish.png')} />
          <OnboardingAvatarItem source={require('../../assets/images/avatars/ray.png')} />
          <OnboardingAvatarItem source={require('../../assets/images/avatars/seahorse.png')} />
        </Col>
        <Col style={styles.col}>
          <OnboardingAvatarItem source={require('../../assets/images/avatars/seaturtle.png')} />
          <OnboardingAvatarItem source={require('../../assets/images/avatars/snail.png')} />
          <OnboardingAvatarItem source={require('../../assets/images/avatars/starfish.png')} />
        </Col>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  col: {
    flex: 1,
    margin: 5,
    alignItems: 'center'
  }
});
