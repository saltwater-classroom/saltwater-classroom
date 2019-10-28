import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Form, Textarea } from 'native-base';

export default class TextAreaInput extends Component {
  render() {
    const { placeHolderText, rowNumber, containerStyle, textAreaStyle } = this.props;

    const styleContainer = containerStyle ? [styles.container, containerStyle] : styles.container;
    const styleArea = textAreaStyle ? [styles.textArea, textAreaStyle] : styles.textArea;

    return (
      <Form style={styleContainer}>
        <Textarea bordered rowSpan={rowNumber} placeHolder={placeHolderText} style={styleArea} />
      </Form>
    );
  }
}

TextAreaInput.defaultProps = {
  rowNumber: 5,
  containerStyle: undefined,
  textAreaStyle: undefined
};

TextAreaInput.propTypes = {
  placeHolderText: PropTypes.string.isRequired,
  rowNumber: PropTypes.number,
  containerStyle: PropTypes.object,
  textAreaStyle: PropTypes.object
};

const styles = StyleSheet.create({
  base: {
    height: 50,
    padding: 10
  },
  container: {
    padding: 10
  },
  textArea: {
    padding: 10
  }
});
