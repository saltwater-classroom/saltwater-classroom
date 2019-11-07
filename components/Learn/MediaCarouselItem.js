import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import ModalView from '../shared_components/ModalView';
import LinkPreviewItem from '../shared_components/LinkPreviewItem';
import { baseColors } from '../shared_components/Colors';
import MediaModalView from './MediaModalView';

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

export default class MediaCarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      selectedItem: null
    };
  }

  onPressItem = (item, title, url) => {
    this.showModal(item);
    this.setState({
      selectedItem: { title, url }
    });
  };

  hideMyModal = () => this.setState({ isModalVisible: false });

  showModal = () => this.setState({ isModalVisible: true });

  render() {
    const { width, title, url, type } = this.props;
    const { selectedItem } = this.state;
    const fields = type === 'news' ? newsFields : videoFields;
    const modalView = selectedItem ? (
      <MediaModalView title={selectedItem.title} url={selectedItem.url} fields={fields} />
    ) : (
      undefined
    );
    return (
      <TouchableOpacity onPress={item => this.onPressItem(item, title, url)}>
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

MediaCarouselItem.propTypes = {
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
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
