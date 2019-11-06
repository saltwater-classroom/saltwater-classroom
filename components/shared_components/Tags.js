import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Text, Content } from 'native-base';

import { baseColorNames, baseColors } from './Colors';

export default class Tag extends React.Component {
  render() {
    const { text, style, containerStyle, background, fontColor, outline } = this.props;
    const styleContainer = containerStyle || styles.containerStyle;
    const buttonColor = outline
      ? {
          backgroundColor: 'transparent',
          borderColor: baseColors[background],
          borderWidth: 2
        }
      : { backgroundColor: baseColors[background] };

    // if fontcolor is given, use that. Else, determine if it is in outline.
    // default color for outlined tag is oceanFloor.  default for filled tag is whiteSands.
    // eslint-disable-next-line no-nested-ternary
    const textColor = fontColor
      ? { color: baseColors[fontColor] }
      : outline
      ? { color: baseColors.oceanFloor }
      : { color: baseColors.whiteSands };

    return (
      <Content style={styleContainer}>
        <View style={[styles.base, buttonColor, style]}>
          <Text style={textColor}>{text}</Text>
        </View>
      </Content>
    );
  }
}

Tag.defaultProps = {
  text: 'tag',
  style: undefined,
  containerStyle: undefined,
  outline: true,
  background: 'oceanFloor',
  fontColor: undefined
};

Tag.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  background: PropTypes.oneOf(baseColorNames),
  fontColor: PropTypes.oneOf(baseColorNames),
  outline: PropTypes.bool
};

const styles = StyleSheet.create({
  base: {
    width: 100,
    justifyContent: 'center',
    borderRadius: 100,
    padding: 10,
    alignItems: 'center'
  },
  containerStyle: {
    padding: 10
  }
});
