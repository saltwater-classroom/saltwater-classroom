import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ScrollView, StyleSheet } from 'react-native';
import * as Actions from '../../app/actions/Do/do';

import StyledText from '../shared_components/Typography';
import BadgeProgress from '../shared_components/BadgeProgress';

const updatedBadgeMessage = 'You just got one step closer to earning';

export class DoMissionCompletedModalView extends React.Component {
  componentDidMount() {
    this.props.getBadgeFromMission(this.props.id);
  }

  render() {
    const { name, updatedBadge } = this.props;
    const percentage = updatedBadge ? updatedBadge.percent : 0;
    const titleMessage = `${name} completed!`;
    const badgeProgressMessage = updatedBadge
      ? `${updatedBadgeMessage}${updatedBadge.name} badge.`
      : `${updatedBadgeMessage}a badge.`;

    return (
      <ScrollView style={styles.item}>
        <StyledText
          textType="subHead3"
          text={titleMessage}
          fontColor="tidepool"
          style={styles.spacing}
        />
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
  updatedBadge: undefined
};

DoMissionCompletedModalView.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getBadgeFromMission: PropTypes.func.isRequired,
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

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, props) {
  return {
    loading: state.doScreen.loading,
    updatedBadge: state.doScreen.updatedBadge
  };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions
// file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

// Connect everything
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoMissionCompletedModalView);
