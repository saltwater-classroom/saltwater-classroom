import React, { Component } from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';

// import PropTypes from 'prop-types';

import StyledText from '../shared_components/Typography';
import ConnectColorPicker from './ConnectColorPicker';
import ConnectLetterEditItem from './ConnectLetterEditItem';
import { baseColors, lightColors } from '../shared_components/Colors';

const colors = [
  lightColors.tidepoolLight,
  lightColors.goldStarLight,
  lightColors.pencilLight,
  baseColors.smoothSailing,
  lightColors.smoothSailingLight,
  lightColors.coralReefLight
];

export default class ConnectWriteLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: colors[0]
    };
  }

  onSelect = selectedColor => {
    this.setState({ selectedColor });
  };

  render() {
    const { selectedColor } = this.state;

    return (
      <ScrollView>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={40}
          contentContainerStyle={{ flex: 1 }}>
          <StyledText
            style={styles.headerText}
            textType="subHead3"
            text="Pick a background pattern & write a note to Ryan!"
            fontColor="tidepool"
          />
          <ConnectColorPicker activeItem={selectedColor} colors={colors} onSelect={this.onSelect} />
          <ConnectLetterEditItem backgroundColor={selectedColor} recipientName="Ryan" />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  headerText: {
    paddingHorizontal: 20,
    paddingBottom: 20
  }
});
