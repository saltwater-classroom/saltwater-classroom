import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { StyleSheet, View, FlatList } from 'react-native';

import { lightColors } from '../shared_components/Colors';

import MediaCarouselItem from './MediaCarouselItem';
import * as Actions from '../../app/actions/Learn/learn';

class LearnSearchResults extends Component {
  renderMediaItem(item) {
    return (
      <View>
        <MediaCarouselItem
          width={this.props.width}
          mediaId={item.id}
          title={item.title}
          url={item.url}
          type={item.type}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.content}
          renderItem={({ item }) => this.renderMediaItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

LearnSearchResults.propTypes = {
  content: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    padding: 7,
    margin: 14,
    borderRadius: 5,
    backgroundColor: lightColors.smoothSailingLight
  }
});

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, props) {
  return {
    loading: state.learnScreen.loading,
    updatedBadge: state.learnScreen.updatedBadge
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
)(LearnSearchResults);
