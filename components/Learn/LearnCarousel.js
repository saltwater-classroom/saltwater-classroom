import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import StyledText from '../shared_components/Typography';
import { lightColors } from '../shared_components/Colors';

import MediaCarouselItem from './MediaCarouselItem';

const deviceWidth = Dimensions.get('window').width;

export default class LearnCarousel extends Component {
  renderItem({ item }) {
    return (
      <View>
        <MediaCarouselItem
          width={deviceWidth / 2}
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
        <StyledText textType="subHead2" text={this.props.carouselTitle} fontColor="tidepool" />
        <Carousel
          ref={c => {
            this.carousel = c;
          }}
          data={this.props.content}
          renderItem={this.renderItem}
          sliderWidth={deviceWidth - 40}
          itemWidth={deviceWidth / 2}
          activeSlideAlignment="start"
        />
      </View>
    );
  }
}

LearnCarousel.propTypes = {
  content: PropTypes.array.isRequired,
  carouselTitle: PropTypes.string.isRequired
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
