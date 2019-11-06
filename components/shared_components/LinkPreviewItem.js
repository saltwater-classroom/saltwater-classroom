import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import LinkPreview from 'link-preview-js';

export default class LinkPreviewItem extends React.Component {
  state = {
    title: null, // title of the web page
    image_url: null, // URL of the thumbnail image preview
    link: null, // URL to open when the chat bubble is clicked
    link_type: null, // type of content displayed by the webpage (e.g. article, video)
    has_preview: false // whether to display the preview or not
  };

  async componentDidMount() {
    const { uri } = this.props;

    // LinkPreview.getPreview('https://www.youtube.com/watch?v=MejbOFk7H6c')
    //   .then(data => console.debug(data));        // setTimeout(function() {
    //     console.warn(images);
    // }, 10000);

    try {
      const { title, images, url, mediaType } = await LinkPreview.getPreview(uri);

      await this.setState({
        title,
        image_url: images[0],
        link: url,
        link_type: mediaType,
        has_preview: true // display the preview
      });
    } catch (e) {
      console.warn('error occurred here: ', e);
    }
  }

  render() {
    const { image_url } = this.state;

    return (
      <View style={styles.item}>
        <Image style={{ width: this.props.width, height: 100 }} source={{ uri: image_url }} />
      </View>
    );
  }
}

LinkPreviewItem.defaultProps = {
  width: 200
};

LinkPreviewItem.propTypes = {
  uri: PropTypes.string.isRequired,
  width: PropTypes.number
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
