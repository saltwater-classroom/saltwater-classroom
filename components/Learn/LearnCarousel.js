import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import StyledText from '../shared_components/Typography';
import { lightColors } from '../shared_components/Colors';

import MediaCarouselItem from './MediaCarouselItem';
import SpeciesProfileCarouselItem from './SpeciesProfileCarouselItem';

import AddSpeciesProfileCarouselItem from './AddSpeciesProfileCarouselItem';

const deviceWidth = Dimensions.get('window').width;

export default class LearnCarousel extends Component {
  renderMediaItem({ item }) {
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

  renderSpeciesProfile({ item, index }) {
    if (index === 0) {
      return (
        <View>
          <AddSpeciesProfileCarouselItem width={this.props.width} />
        </View>
      );
    }
    return (
      <View>
        <SpeciesProfileCarouselItem
          width={this.props.width}
          speciesProfileId={item.id}
          imageUrl={item.image_url}
          speciesName={item.species_name}
        />
      </View>
    );
  }

  render() {
    const renderItemFunc =
      this.props.type === 'Media'
        ? this.renderMediaItem.bind(this)
        : this.renderSpeciesProfile.bind(this);
    return (
      <View style={styles.container}>
        <StyledText textType="subHead2" text={this.props.carouselTitle} fontColor="tidepool" />
        <Carousel
          ref={c => {
            this.carousel = c;
          }}
          data={this.props.content}
          // eslint-disable-next-line react/jsx-no-bind
          renderItem={renderItemFunc}
          sliderWidth={deviceWidth - 40}
          itemWidth={this.props.width}
          activeSlideAlignment="start"
        />
      </View>
    );
  }
}

LearnCarousel.propTypes = {
  content: PropTypes.array.isRequired,
  carouselTitle: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['Media', 'SpeciesProfile']).isRequired,
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
