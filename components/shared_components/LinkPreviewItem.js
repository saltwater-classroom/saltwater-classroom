/* eslint react/no-unused-state: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image } from 'react-native';
import LinkPreview from 'link-preview-js';

export default class LinkPreviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null, // title of the web page
      image_url: null // URL of the thumbnail image preview
    };
  }

  async componentDidMount() {
    const { uri } = this.props;

    try {
      const { title, images } = await LinkPreview.getPreview(uri);

      await this.setState({
        title,
        image_url: images[0]
      });
    } catch (e) {
      console.warn('error occurred here: ', e);
    }
  }

  render() {
    const { image_url } = this.state;
    const widthValue = this.props.width ? this.props.width : 'auto';

    return (
      <View style={styles.item}>
        <Image
          style={{ width: widthValue, height: this.props.height }}
          source={{ uri: image_url }}
        />
      </View>
    );
  }
}

LinkPreviewItem.defaultProps = {
  width: undefined,
  height: 200
};

LinkPreviewItem.propTypes = {
  uri: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    flex: 1
  },
  spacing: {
    marginBottom: 29,
    paddingLeft: 20
  }
});
