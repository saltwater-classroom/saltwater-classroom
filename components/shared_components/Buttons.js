import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, Text, Content } from 'native-base';

import { baseColorNames, baseColors } from './Colors';

export class StyledButton extends React.Component {
  render() {
    const { text, style, padding, background, fontColor } = this.props;
    const paddingStyle = padding || buttonStyle.padding;
    const buttonColor = { backgroundColor: baseColors[background] };
    const textColor = { color: baseColors[fontColor] };

    return (
      <Content style={paddingStyle}>
        <Button style={[buttonStyle.base, buttonColor, style]}>
          <Text style={textColor}>{text}</Text>
        </Button>
      </Content>
    );
  }
}

StyledButton.defaultProps = {
  text: 'click',
  style: undefined,
  padding: undefined,
  background: 'darkCyan',
  fontColor: 'lightBase'
};

StyledButton.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  padding: PropTypes.object,
  background: PropTypes.oneOf(baseColorNames),
  fontColor: PropTypes.oneOf(baseColorNames)
};

const buttonStyle = StyleSheet.create({
  base: {
    width: 100,
    justifyContent: 'center'
  },
  padding: {
    padding: 10
  }
});
