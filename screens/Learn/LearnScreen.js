import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LearnFeed from '../../components/Learn/LearnFeed';

import * as Actions from '../../app/actions/Learn/learn';

class LearnScreen extends React.Component {
  componentDidMount() {
    this.props.getNewContent();
    this.props.getDidYouKnow();
    this.props.getNewsAndEvents();
    this.props.getVideos();
  }

  render() {
    const { newContent, newsAndEvents, videos, didYouKnow } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <LearnFeed
          newContent={newContent}
          newsAndEvents={newsAndEvents}
          videos={videos}
          didYouKnow={didYouKnow}
        />
      </View>
    );
  }
}

LearnScreen.propTypes = {
  getNewContent: PropTypes.func.isRequired,
  getDidYouKnow: PropTypes.func.isRequired,
  getNewsAndEvents: PropTypes.func.isRequired,
  getVideos: PropTypes.func.isRequired,
  newContent: PropTypes.array.isRequired,
  didYouKnow: PropTypes.object.isRequired,
  newsAndEvents: PropTypes.array.isRequired,
  videos: PropTypes.array.isRequired
};

LearnScreen.navigationOptions = {
  header: null
};

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, props) {
  return {
    loading: state.learnScreen.loading,
    newContent: state.learnScreen.newContent,
    didYouKnow: state.learnScreen.didYouKnow,
    newsAndEvents: state.learnScreen.newsAndEvents,
    videos: state.learnScreen.videos
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
)(LearnScreen);
