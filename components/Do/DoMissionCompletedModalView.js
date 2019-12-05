import React from 'react';
import PropTypes from 'prop-types';

import { ScrollView, StyleSheet } from 'react-native';

import StyledText from '../shared_components/Typography';
import BadgeProgress from '../shared_components/BadgeProgress';

const updatedBadgeMessage = 'You just got one step closer to earning the ';

export default class DoMissionCompletedModalView extends React.Component {
  render() {
    const { title, updatedBadge } = this.props;
    const percentage = updatedBadge ? updatedBadge.percent : 0;
    const badgeProgressMessage = updatedBadge
      ? `${updatedBadgeMessage}${updatedBadge.name} badge.`
      : `${updatedBadgeMessage}a badge.`;

    return (
      <ScrollView style={styles.item}>
        <StyledText textType="subHead3" text={title} fontColor="tidepool" style={styles.spacing} />
        <StyledText
          textType="body"
          text={badgeProgressMessage}
          fontColor="coralReef"
          style={styles.spacing}
        />

        <BadgeProgress percent={percentage} size={200} radius={150} borderWidth={30} />
      </ScrollView>
    );
  }
}

DoMissionCompletedModalView.defaultProps = {
  updatedBadge: { name: 'defaultName', percent: 20 }
};

DoMissionCompletedModalView.propTypes = {
  title: PropTypes.string.isRequired,
  updatedBadge: PropTypes.shape({
    name: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired
  })
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 30
  },
  spacing: {
    marginBottom: 29,
    paddingLeft: 20,
    paddingRight: 20
  }
});
