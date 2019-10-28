import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

import { baseColorNames, baseColors } from './Colors';

export default function StyledText(props) {
  const styleType = checkTextType(props.textType);
  const textColor = { color: baseColors[props.fontColor] };

  return <Text style={[props.style, styleType, textColor]}>{props.text}</Text>;
}

StyledText.defaultProps = {
  textType: 'body',
  style: { color: 'black' },
  text: 'replace me',
  fontColor: 'darkBase'
};

StyledText.propTypes = {
  textType: PropTypes.oneOf(['head', 'subHead', 'subHead2', 'subHead3', 'body']),
  style: PropTypes.object,
  text: PropTypes.string,
  fontColor: PropTypes.oneOf(baseColorNames)
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
    default:
      return textType.body;
  }
}

const textType = StyleSheet.create({
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 35
  },
  subHead: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28
  },
  subHead2: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 23
  },
  subHead3: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 21
  },
  body: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 21
  }
});
