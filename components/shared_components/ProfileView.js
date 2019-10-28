import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';

import StyledText from './Typography';

/* eslint global-require: 0 */
export default class ProfileView extends Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { icon, name, bio, interests } = this.props;

    return (
      <View style={styles.container}>
        <StyledText textType="head" text={name} fontColor="darkBase" style={styles.spacing} />
        <Image
          source={require('../../assets/images/user.png')}
          style={[{ width: 100, height: 100 }, styles.spacing]}
        />
        <StyledText style={styles.spacing} textType="body" text={bio} fontColor="greyCyan" />
      </View>
    );
  }
}

ProfileView.defaultProps = {
  icon: 'idk',
  name: undefined,
  bio: undefined,
  interests: undefined
};

ProfileView.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  interests: PropTypes.any
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  spacing: {
    marginBottom: 25
  }
});
