import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { baseColors, darkColors } from '../shared_components/Colors';
import { textType } from '../shared_components/Typography';

export default class OnboardingChipItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  toggleSelect() {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  }

  render() {
    const { text } = this.props;
    const containerStyle = this.state.selected
      ? styles.selectedChipContainer
      : styles.defaultChipContainer;
    const chipStyle = this.state.selected ? styles.selectedChip : styles.defaultChip;
    return (
      <TouchableOpacity style={containerStyle} onPress={() => this.toggleSelect()}>
        <Text style={chipStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

OnboardingChipItem.propTypes = {
  text: PropTypes.string.isRequired
};

const base = StyleSheet.create({
  chipContainer: {
    alignItems: 'flex-start',
    margin: 5,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20
  }
});

const styles = StyleSheet.create({
  chipContainer: {
    alignItems: 'flex-start',
    margin: 5,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20
  },
  defaultChipContainer: {
    backgroundColor: darkColors.tidepoolDark,
    ...base.chipContainer
  },
  defaultChip: {
    backgroundColor: darkColors.tidepoolDark,
    color: baseColors.whiteSands,
    fontFamily: textType.subHead.fontFamily,
    fontSize: textType.subHead2.fontSize
  },
  selectedChipContainer: {
    backgroundColor: baseColors.goldStar,
    ...base.chipContainer
  },
  selectedChip: {
    backgroundColor: baseColors.goldStar,
    color: baseColors.oceanFloor,
    fontFamily: textType.head.fontFamily,
    fontSize: textType.subHead2.fontSize
  }
});
