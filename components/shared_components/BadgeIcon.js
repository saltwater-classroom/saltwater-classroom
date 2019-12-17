import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';

import { lightColors } from './Colors';
import { imageSelect } from './BadgeIconGetter';

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
    const { id, size, isInProgress } = this.props;

    const IMAGENAME = imageSelect(id, isInProgress);

    // todo: replace circle with real icon
    return (
      <View style={styles.container}>
        <Image source={IMAGENAME} style={{ width: size, height: size }} />
        {/* <View style={this.circleStyle(size)} /> */}
      </View>
    );
  }
}

BadgeIcon.defaultProps = {
  id: '1',
  size: 75
};

BadgeIcon.propTypes = {
  id: PropTypes.string,
  size: PropTypes.number,
  isInProgress: PropTypes.bool.isRequired
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
