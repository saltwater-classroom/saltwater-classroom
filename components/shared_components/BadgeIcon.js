import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import { lightColors } from './Colors';

/* eslint global-require: 0 */
export default class BadgeIcon extends Component {
  circleStyle = size => {
    return {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: lightColors.goldStarLight
    };
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { icon, size } = this.props;

    // todo: replace circle with real icon
    return (
      <View style={styles.container}>
        <View style={this.circleStyle(size)} />
      </View>
    );
  }
}

BadgeIcon.defaultProps = {
  icon: 'idk',
  size: 75
};

BadgeIcon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number
};

const styles = StyleSheet.create({
  base: {
    height: 50,
    padding: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }
});
