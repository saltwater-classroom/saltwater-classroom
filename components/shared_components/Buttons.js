import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';
import StyledText from './Typography';

import { baseColors } from './Colors';

export class StyledButton extends React.Component {
  render() {
    const { text, style, background, fontColor, onPress } = this.props;
    const buttonColor = { backgroundColor: baseColors[background] };

    return (
      <Button style={[buttonStyle.base, buttonColor, style]} rounded small onPress={onPress}>
        <StyledText
          style={{ textAlign: 'center', alignSelf: 'center' }}
          fontColor={fontColor}
          textType="bodyBold"
          text={text}
        />
      </Button>
    );
  }
}

StyledButton.defaultProps = {
  text: 'click',
  style: undefined,
  background: 'tidepool',
  fontColor: 'whiteSands'
};

StyledButton.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  background: PropTypes.oneOf(Object.keys(baseColors)),
  fontColor: PropTypes.oneOf(Object.keys(baseColors)),
  onPress: PropTypes.func.isRequired
};

const buttonStyle = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    flex: 1,
    paddingHorizontal: 16
  }
});
