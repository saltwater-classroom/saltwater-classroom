import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import StyledText from '../shared_components/Typography';
import { baseColors } from '../shared_components/Colors';

export default class LearnDidYouKnow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StyledText
          style={styles.header}
          textType="subHead3"
          text="Did you know?"
          fontColor="whiteSands"
        />
        <StyledText textType="body" text={this.props.fact.fact} fontColor="whiteSands" />
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
    backgroundColor: baseColors.pencil
  },
  header: {
    marginBottom: 7
  }
});
