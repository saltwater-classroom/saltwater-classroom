import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from 'native-base';

import SearchBar from '../shared_components/SearchBar';
import LearnDidYouKnow from './LearnDidYouKnow';
import LearnCarousel from './LearnCarousel';

export default class LearnFeed extends Component {
  render() {
    return (
      <ScrollView>
        <LearnDidYouKnow />
        <LearnCarousel content={this.props.content} />
      </ScrollView>
    );
  }
}

LearnFeed.propTypes = {
  content: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
});
