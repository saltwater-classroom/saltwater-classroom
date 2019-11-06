import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from 'native-base';

import ModalView from '../shared_components/ModalView';
import LinkPreviewItem from '../shared_components/LinkPreviewItem';
import NewsModalView from './NewsModalView';

// These Fields represent news questions
const fields = [
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

export default class NewsCarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      view: null
    };
  }

  onPressItem = (item, title, url) => {
    this.showModal(item);

    this.setState({
      view: <NewsModalView title={title} url={url} fields={fields} />
    });
  };

  hideMyModal = () => this.setState({ isModalVisible: false });

  showModal = () => this.setState({ isModalVisible: true });

  render() {
    const { width, title, url } = this.props;
    return (
      <TouchableOpacity onPress={item => this.onPressItem(item, title, url)}>
        <View style={styles.container}>
          <LinkPreviewItem uri={url} width={width} />
        </View>
        {this.state.isModalVisible && (
          <ModalView
            view={this.state.view}
            modalVisible={this.state.isModalVisible}
            hideModal={this.hideMyModal}
          />
        )}
      </TouchableOpacity>
    );
  }
}

NewsCarouselItem.propTypes = {
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: 'auto'
  }
});
