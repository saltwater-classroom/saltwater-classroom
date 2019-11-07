import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import LearnDidYouKnow from './LearnDidYouKnow';
import LearnCarousel from './LearnCarousel';

export default class LearnFeed extends Component {
  render() {
    const { didYouKnow, newContent, newsAndEvents, videos } = this.props;
    return (
      <ScrollView>
        <LearnDidYouKnow fact={didYouKnow} />
        <LearnCarousel content={newContent} carouselTitle="New!" />
        <LearnCarousel content={newsAndEvents} carouselTitle="News and Current Events" />
        <LearnCarousel content={videos} carouselTitle="Videos" />
      </ScrollView>
    );
  }
}

LearnFeed.propTypes = {
  newContent: PropTypes.array.isRequired,
  newsAndEvents: PropTypes.array.isRequired,
  videos: PropTypes.array.isRequired,
  didYouKnow: PropTypes.object.isRequired
};
