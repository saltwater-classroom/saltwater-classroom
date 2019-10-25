import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { InputGroup, Input } from 'native-base';

export default class TextInput extends Component {
  render() {
    const { placeHolderText } = this.props;

    return (
      <InputGroup borderType="regular">
        <Input multiline placeholder={placeHolderText} style={styles.base} />
      </InputGroup>
    );
  }
}

TextInput.propTypes = {
  placeHolderText: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  base: {
    height: 50,
    padding: 10
  },
  padding: {
    padding: 10
  }
});
