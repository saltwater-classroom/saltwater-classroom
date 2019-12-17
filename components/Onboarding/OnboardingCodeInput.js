import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import { baseColors, darkColors } from '../shared_components/Colors';
import { textType } from '../shared_components/Typography';

export default class OnboardingCodeInput extends Component {
  render() {
    const { space, keyboardType, onFulfill } = this.props;
    return (
      <CodeInput
        space={space}
        activeColor={baseColors.whiteSands}
        inactiveColor={baseColors.whiteSands}
        className="border-box"
        keyboardType={keyboardType}
        containerStyle={styles.container}
        codeInputStyle={styles.code}
        onFulfill={onFulfill}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  code: {
    borderRadius: 10,
    borderColor: darkColors.tidepoolDark,
    backgroundColor: darkColors.tidepoolDark,
    fontFamily: textType.head.fontFamily,
    fontSize: textType.subHead2.fontSize,
    color: baseColors.whiteSands,
    marginHorizontal: 50,
    height: 80,
    width: 50
  }
});

OnboardingCodeInput.propTypes = {
  space: PropTypes.number.isRequired,
  keyboardType: PropTypes.string.isRequired,
  onFulfill: PropTypes.func.isRequired
};
