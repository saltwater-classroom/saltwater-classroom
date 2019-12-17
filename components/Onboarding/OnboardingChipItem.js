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
    if (!this.state.selected) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  }

  render() {
    const { text } = this.props;
    return (
      <TouchableOpacity
        style={this.state.selected ? styles.selectedChipContainer : styles.defaultChipContainer}
        onPress={() => this.toggleSelect()}>
        <Text style={this.state.selected ? styles.selectedChip : styles.defaultChip}>{text}</Text>
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
