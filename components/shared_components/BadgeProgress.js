import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import BadgeIcon from './BadgeIcon';

import { baseColors, lightColors } from './Colors';

export default class BadgeProgress extends React.Component {
  render() {
    const { percent, size, radius, borderWidth, id } = this.props;
    const isStarted = percent > 0;
    return (
      <View style={styles.item}>
        <ProgressCircle
          percent={percent}
          radius={radius}
          borderWidth={borderWidth}
          color={baseColors.goldStar}
          shadowColor={lightColors.tidepoolLight}
          bgColor="#fff">
          <BadgeIcon size={size} isInProgress={isStarted} id={id} />
        </ProgressCircle>
      </View>
    );
  }
}

BadgeProgress.defaultProps = {
  size: 75,
  radius: 50,
  borderWidth: 8,
  id: 1
};

BadgeProgress.propTypes = {
  percent: PropTypes.number.isRequired,
  id: PropTypes.string,
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
