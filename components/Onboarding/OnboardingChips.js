import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import OnboardingChipItem from './OnboardingChipItem';

export default class OnboardingChips extends Component {
  render() {
    const { items } = this.props;
    return (
      <View style={styles.container}>
        {items.map(item => (
          <OnboardingChipItem text={item} />
        ))}
      </View>
    );
  }
}

OnboardingChips.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
