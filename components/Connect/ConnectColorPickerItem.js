import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import { darkColors } from '../shared_components/Colors';

export default class ConnectColorPickerItem extends Component {
  render() {
    const { color, activeItem } = this.props;
    const isSelected = color === activeItem;
    const activeBorder = isSelected
      ? { borderWidth: 4, borderColor: darkColors.coralReefDark }
      : {};
    return <View style={[styles.container, { backgroundColor: color }, activeBorder]} />;
  }
}

ConnectColorPickerItem.propTypes = {
  color: PropTypes.string.isRequired,
  activeItem: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 75,
    height: 75,
    margin: 10,
    borderRadius: 10
  },
  columnWrapper: {
    justifyContent: 'space-around'
  }
});
