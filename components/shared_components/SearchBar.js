import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Item, Input, Icon } from 'native-base';

export default class SearchBar extends Component {
  render() {
    return (
      <View>
        <Item onPress={this.props.onClose}>
          <Input placeholder="Search" onFocus={this.props.onFocus} onBlur={this.props.onBlur} />
          <Icon name="ios-close" />
        </Item>
      </View>
    );
  }
}

const defaultOnFocus = () => console.log('focus');
const defaultOnBlur = () => console.log('blur');
const defaultOnClose = () => console.log('close');

SearchBar.defaultProps = {
  onClose: defaultOnClose,
  onFocus: defaultOnFocus,
  onBlur: defaultOnBlur
};

SearchBar.propTypes = {
  onClose: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};
