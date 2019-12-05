import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import * as Actions from '../../app/actions/Learn/learn';

import ModalView from '../shared_components/ModalView';
import LinkPreviewItem from '../shared_components/LinkPreviewItem';
import { baseColors } from '../shared_components/Colors';
import MediaModalView from './MediaModalView';

import DoMissionCompletedModalView from '../Do/DoMissionCompletedModalView';

import StyledText from '../shared_components/Typography';

// These Fields represent news questions
const newsFields = [
  {
    type: 'text',
    name: 'q1',
    required: true,
    label: 'What was the main point of the article?'
  },
  {
    type: 'text',
    name: 'q2',
    required: true,
    label: 'What did you find most interesting?'
  },
  {
    type: 'text',
    name: 'user_name',
    required: true,
    label: 'What are your thoughts?'
  }
];

// These Fields represent video questions
const videoFields = [
  {
    type: 'text',
    name: 'q1',
    required: true,
    label: 'What was the main point of the video?'
  },
  {
    type: 'text',
    name: 'q2',
    required: true,
    label: 'What did you find most interesting?'
  },
  {
    type: 'text',
    name: 'user_name',
    required: true,
    label: 'What are your thoughts?'
  }
];

export class MediaCarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isBadgeCompletedModalVisible: false,
      selectedItem: null
    };
  }

  onPressItem = (item, title, url, mediaId) => {
    this.props.getBadgeFromLearn(mediaId);
    this.showModal();
    this.setState({
      selectedItem: { title, url, mediaId }
    });
  };

  hideMyModal = () =>
    this.setState({
      isModalVisible: false,
      isBadgeCompletedModalVisible: false
    });

  showModal = () => this.setState({ isModalVisible: true });

  showBadgeCompletedModal = () => {
    this.setState({
      isBadgeCompletedModalVisible: true
    });
  };

  render() {
    const { width, title, url, type, mediaId, updatedBadge } = this.props;
    const { selectedItem, isBadgeCompletedModalVisible } = this.state;
    const fields = type === 'news' ? newsFields : videoFields;
    const modalView =
      selectedItem && !isBadgeCompletedModalVisible ? (
        <MediaModalView
          title={selectedItem.title}
          url={selectedItem.url}
          fields={fields}
          onSubmit={this.showBadgeCompletedModal}
        />
      ) : (
        <DoMissionCompletedModalView updatedBadge={updatedBadge} title="Congrats!" />
      );

    return (
      <TouchableOpacity onPress={item => this.onPressItem(item, title, url, mediaId)}>
        <View style={styles.container}>
          <LinkPreviewItem uri={url} width={width} height={150} />
          <View style={styles.tag}>
            <StyledText textType="body" text={type} fontColor="whiteSands" style={styles.spacing} />
          </View>
        </View>

        <StyledText
          numLines={2}
          textType="body"
          text={title}
          fontColor="tidepool"
          style={styles.spacing}
        />

        {this.state.isModalVisible && (
          <ModalView
            view={modalView}
            modalVisible={this.state.isModalVisible}
            hideModal={this.hideMyModal}
          />
        )}
      </TouchableOpacity>
    );
  }
}

MediaCarouselItem.defaultProps = {
  updatedBadge: { name: 'defaultName', percent: 20 }
};

MediaCarouselItem.propTypes = {
  mediaId: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  updatedBadge: PropTypes.shape({
    name: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired
  }),
  getBadgeFromLearn: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: 'auto'
  },
  spacing: {
    marginTop: 7
  },
  tag: {
    position: 'absolute',
    top: 12,
    left: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: baseColors.tidepool,
    padding: 4
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
)(MediaCarouselItem);
