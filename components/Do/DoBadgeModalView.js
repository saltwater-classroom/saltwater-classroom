import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import BadgeProgress from '../shared_components/BadgeProgress';

import StyledText from '../shared_components/Typography';

export default class DoBadgeModalView extends React.Component {
  onPress = () => {
    this.props.onPressItem(this.props);
  };

  render() {
    const { name, percent, inspirationalMessage, goalMessage } = this.props;
    return (
      <View style={styles.item}>
        <StyledText textType="subHead3" text={name} fontColor="tidepool" style={styles.spacing} />
        <StyledText
          textType="body"
          text={inspirationalMessage}
          fontColor="coralReef"
          style={styles.spacing}
        />
        <StyledText
          textType="body"
          text={goalMessage}
          fontColor="coralReef"
          style={styles.spacing}
        />

        <BadgeProgress percent={percent} size={200} radius={150} borderWidth={30} />
      </View>
    );
  }
}

DoBadgeModalView.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  inspirationalMessage: PropTypes.string.isRequired,
  goalMessage: PropTypes.string.isRequired,
  onPressItem: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'column',
    flex: 1
  },
  spacing: {
    marginBottom: 29
  }
});
