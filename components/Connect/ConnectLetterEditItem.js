import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import StyledText from '../shared_components/Typography';

export default class ConnectLetterEditItem extends Component {
  render() {
    const { recipientName, backgroundColor } = this.props;
    const hiMessage = `Hi ${recipientName}!`;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <StyledText textType="body" text={hiMessage} fontColor="tidepool" />
        <TextInput
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline
          style={{ textAlignVertical: 'top', justifyContent: 'flex-start' }}
        />
      </View>
    );
  }
}

ConnectLetterEditItem.propTypes = {
  recipientName: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    height: 250
  },
  columnWrapper: {
    justifyContent: 'space-around'
  }
});
