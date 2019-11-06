import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

import Carousel from 'react-native-snap-carousel';
import StyledText from '../shared_components/Typography';
import { lightColors } from '../shared_components/Colors';

import NewsCarouselItem from './NewsCarouselItem';

const deviceWidth = Dimensions.get('window').width;

export default class LearnCarousel extends Component {
  _renderItem({ item, index }) {
    return (
      <View>
        <Text>{item.title}</Text>
        <NewsCarouselItem width={deviceWidth / 2} title={item.title} url={item.url} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StyledText textType="subHead2" text="New" fontColor="tidepool" />
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.props.content}
          renderItem={this._renderItem}
          sliderWidth={deviceWidth - 40}
          itemWidth={deviceWidth / 2}
          activeSlideAlignment="start"
        />
      </View>
    );
  }
}

LearnCarousel.propTypes = {
  content: PropTypes.array.isRequired
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
