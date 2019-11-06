import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import BadgeIcon from './BadgeIcon';

import { baseColors, lightColors } from './Colors';

export default class BadgeProgress extends React.Component {
  render() {
    const { percent, size, radius, borderWidth } = this.props;
    return (
      <View style={styles.item}>
        <ProgressCircle
          percent={percent}
          radius={radius}
          borderWidth={borderWidth}
          color={baseColors.pencil}
          shadowColor={lightColors.goldStarLight}
          bgColor="#fff">
          <BadgeIcon size={size} />
        </ProgressCircle>
      </View>
    );
  }
}

BadgeProgress.defaultProps = {
  size: 75,
  radius: 50,
  borderWidth: 8,
  badgeIcon: ''
};

BadgeProgress.propTypes = {
  percent: PropTypes.number.isRequired,
  badgeIcon: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  size: PropTypes.number,
  radius: PropTypes.number,
  borderWidth: PropTypes.number
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
});
