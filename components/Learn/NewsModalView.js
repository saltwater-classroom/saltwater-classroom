import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native';
import { WebView } from 'react-native-webview';

import FormGenerator from '../shared_components/FormGenerator';

import StyledText from '../shared_components/Typography';
import LinkPreviewItem from '../shared_components/LinkPreviewItem';

export default class NewsModalView extends React.Component {
  render() {
    const { title, url, fields } = this.props;
    return (
      <ScrollView style={styles.item}>
        <StyledText
          textType="subHead2"
          text={title}
          fontColor="tidepool"
          style={styles.spacing}
        />
        <TouchableOpacity
          style={styles.photo}
          onPress={() => {
            Linking.openURL(url);
          }}
        >
          <LinkPreviewItem uri={url} />
        </TouchableOpacity>

        <FormGenerator fields={fields} onSubmit={this.props.openNextModal} />
      </ScrollView>
    );
  }
}

NewsModalView.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 30
  },
  photo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  spacing: {
    marginBottom: 29,
    paddingLeft: 20
  }
});
