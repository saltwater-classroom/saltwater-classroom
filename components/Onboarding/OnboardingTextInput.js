import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';
import { baseColors, darkColors } from '../shared_components/Colors';
import { textType } from '../shared_components/Typography';

export default class OnboardingTextInput extends Component {
  render() {
    const { flex, maxLength, secureTextEntry, autoFocus } = this.props;
    return (
      <TextInput
        flex={flex}
        maxLength={maxLength}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        returnKeyType="done"
        autoFocus={autoFocus}
        selectionColor={baseColors.whiteSands}
      />
    );
  }
}

OnboardingTextInput.defaultProps = {
  secureTextEntry: false,
  autoFocus: true,
  maxLength: 100
};

OnboardingTextInput.propTypes = {
  flex: PropTypes.number.isRequired,
  maxLength: PropTypes.number,
  secureTextEntry: PropTypes.bool,
  autoFocus: PropTypes.bool
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: darkColors.tidepoolDark,
    fontFamily: textType.head.fontFamily,
    fontSize: textType.subHead2.fontSize,
    color: baseColors.whiteSands,
    margin: 5
  }
});
