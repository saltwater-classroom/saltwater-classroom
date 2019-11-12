import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import StyledText from '../shared_components/Typography';
import { lightColors } from '../shared_components/Colors';

export default class LearnDidYouKnow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StyledText
          style={styles.header}
          textType="subHead3"
          text="Did you know?"
          fontColor="tidepool"
        />
        <StyledText textType="body" text={this.props.fact.fact} fontColor="pencil" />
      </View>
    );
  }
}

LearnDidYouKnow.propTypes = {
  fact: PropTypes.shape({
    fact: PropTypes.string.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    padding: 7,
    margin: 14,
    borderRadius: 5,
    backgroundColor: lightColors.smoothSailingLight
  },
  header: {
    marginBottom: 7
  }
});
