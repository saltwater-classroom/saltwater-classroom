import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { baseColors, darkColors, lightColors } from '../shared_components/Colors';
import { textType } from '../shared_components/Typography';

export default class OnboardingButton extends Component {
  render() {
    const { text, disabled, onPress } = this.props;
    return (
      <TouchableOpacity
        style={disabled ? styles.buttonStyleDisabled : styles.buttonStyle}
        onPress={() => onPress()}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

OnboardingButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired
};

OnboardingButton.defaultProps = {
  disabled: false
};

const base = StyleSheet.create({
  baseText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: textType.head.fontFamily
  },

  baseButton: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    width: 300,
    elevation: 5
  }
});

const styles = StyleSheet.create({
  textStyle: {
    color: darkColors.tidepoolDark,
    ...base.baseText
  },

  buttonStyleDisabled: {
    backgroundColor: lightColors.tidepoolLight,
    ...base.baseButton
  },

  buttonStyle: {
    backgroundColor: baseColors.whiteSands,
    ...base.baseButton
  }
});
