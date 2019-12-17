import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';

/* eslint global-require: 0 */
export default class ProfileIcon extends Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { icon, width, height } = this.props;

    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/user.png')} style={{ width, height }} />
      </View>
    );
  }
}

ProfileIcon.defaultProps = {
  icon: 'idk',
  width: 40,
  height: 40
};

ProfileIcon.propTypes = {
  icon: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center'
  }
});
