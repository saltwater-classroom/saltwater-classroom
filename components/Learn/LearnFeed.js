import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Dimensions } from 'react-native';

import LearnDidYouKnow from './LearnDidYouKnow';
import LearnCarousel from './LearnCarousel';

import SearchBar from '../shared_components/SearchBar';

import Animations from './Animations';

export default class LearnFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchModalVisible: false
    };
  }

  hideSearchModal = () =>
    this.setState({
      isSearchModalVisible: false
    });

  toggleModal = () =>
    this.setState(prevState => ({
      isSearchModalVisible: !prevState.isSearchModalVisible
    }));

  openSearchBar = () => {
    this.setState({ isSearchModalVisible: true });
  };

  render() {
    const { didYouKnow, newContent, newsAndEvents, videos, speciesProfiles } = this.props;
    const deviceWidth = Dimensions.get('window').width;
    const halfWidth = deviceWidth / 2;
    const thirdWith = deviceWidth / 3;

    return (
      <ScrollView>
        <SearchBar onFocus={() => this.openSearchBar()} onClose={this.hideSearchModal} />
        <Animations expanded={this.state.isSearchModalVisible} toggleModal={this.toggleModal} />

        <LearnDidYouKnow fact={didYouKnow} />
        <LearnCarousel content={newContent} carouselTitle="New!" type="Media" width={halfWidth} />
        <LearnCarousel
          content={speciesProfiles}
          carouselTitle="Species Profiles"
          type="SpeciesProfile"
          width={thirdWith}
        />
        <LearnCarousel
          content={newsAndEvents}
          carouselTitle="News and Current Events"
          type="Media"
          width={halfWidth}
        />
        <LearnCarousel content={videos} carouselTitle="Videos" type="Media" width={halfWidth} />
      </ScrollView>
    );
  }
}

LearnFeed.propTypes = {
  newContent: PropTypes.array.isRequired,
  newsAndEvents: PropTypes.array.isRequired,
  videos: PropTypes.array.isRequired,
  didYouKnow: PropTypes.object.isRequired,
  speciesProfiles: PropTypes.array.isRequired
};
