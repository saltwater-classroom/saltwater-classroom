import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';

/* eslint global-require: 0 */
export default class ProfileIcon extends Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { icon } = this.props;

    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/user.png')} style={{ width: 40, height: 40 }} />
      </View>
    );
  }
}

ProfileIcon.defaultProps = {
  icon: 'idk'
};

ProfileIcon.propTypes = {
  icon: PropTypes.string
};

const styles = StyleSheet.create({
  base: {
    height: 50,
    padding: 10
  },
  container: {
    padding: 10,
    height: 62,
    width: 62
  }
});
