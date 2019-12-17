import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../app/actions/Do/do';

import DoTabs from '../../components/Do/DoTabs';

class ConnectRecentScreen extends React.Component {
  componentDidMount() {
    this.props.getMissionList();
    this.props.getBadgesList();
  }

  render() {
    return (
      <View style={{ flex: 1, height: 200 }}>
        <DoTabs missions={this.props.missions} badges={this.props.badges} />
      </View>
    );
  }
}

ConnectRecentScreen.propTypes = {
  getMissionList: PropTypes.func.isRequired,
  getBadgesList: PropTypes.func.isRequired,
  missions: PropTypes.array.isRequired,
  badges: PropTypes.array.isRequired
};

ConnectRecentScreen.navigationOptions = {
  header: null
};

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, props) {
  return {
    loading: state.doScreen.loading,
    missions: state.doScreen.missions,
    badges: state.doScreen.badges
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
)(ConnectRecentScreen);
