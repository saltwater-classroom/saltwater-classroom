import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from 'native-base';

import StyledText from '../shared_components/Typography';
import { lightColors } from '../shared_components/Colors';

export default class LearnDidYouKnow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StyledText
          textType="subHead3"
          text="Did you know?"
          fontColor="tidepool"
        />
        <StyledText
          textType="body"
          text="Less than 5% of the planet's oceans have been discovered"
          fontColor="pencil"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    padding: 7,
    margin: 14,
    borderRadius: 5,
    backgroundColor: lightColors.smoothSailingLight
  }
});
