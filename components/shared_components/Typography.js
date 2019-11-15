import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

import { baseColorNames, baseColors } from './Colors';

export default function StyledText(props) {
  const styleType = checkTextType(props.textType);
  const textColor = { color: baseColors[props.fontColor] };

  if (props.numLines) {
    return (
      <Text style={[props.style, styleType, textColor]} numberOfLines={props.numLines}>
        {props.text}
      </Text>
    );
  }
  return <Text style={[props.style, styleType, textColor]}>{props.text}</Text>;
}

StyledText.defaultProps = {
  textType: 'body',
  style: { color: 'black' },
  text: 'replace me',
  fontColor: 'oceanFloor',
  numLines: undefined
};

StyledText.propTypes = {
  textType: PropTypes.oneOf(['head', 'subHead', 'subHead2', 'subHead3', 'body', 'bodyBold']),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  text: PropTypes.string,
  fontColor: PropTypes.oneOf(baseColorNames),
  numLines: PropTypes.number
};

// to determine what type of Text
function checkTextType(type) {
  switch (type) {
    case 'head':
      return textType.head;
    case 'subHead':
      return textType.subHead;
    case 'subHead2':
      return textType.subHead2;
    case 'subHead3':
      return textType.subHead3;
    case 'body':
      return textType.body;
    case 'bodyBold':
      return textType.bodyBold;
    default:
      return textType.body;
  }
}

export const textType = StyleSheet.create({
  head: {
    fontSize: 30,
    lineHeight: 35,
    fontFamily: 'nunito-sans-bold'
  },
  subHead: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'nunito-sans-regular'
  },
  subHead2: {
    fontSize: 18,
    fontFamily: 'zilla-slab-italic',
    lineHeight: 23
  },
  subHead3: {
    fontSize: 24,
    fontFamily: 'zilla-slab-italic',
    lineHeight: 30
  },
  body: {
    fontSize: 18,
    fontFamily: 'nunito-sans-regular',
    lineHeight: 21
  },
  bodyBold: {
    fontSize: 16,
    fontFamily: 'nunito-sans-bold',
    lineHeight: 21
  }
});
