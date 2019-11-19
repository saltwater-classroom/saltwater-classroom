import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tab, Tabs, Container } from 'native-base';
import PropTypes from 'prop-types';

import ExploreList from './ExploreList';

import StyledText from '../shared_components/Typography';

export default class ExploreTabs extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <Container>
        <StyledText textType="head" text="Community" fontColor="tidepool" />
        <StyledText
          textType="subHead3"
          text="Find peers who have similar interests to you."
          fontColor="tidepool"
        />

        <Tabs tabBarPosition="top">
          <Tab heading="My Peers">
            <ScrollView style={{ flex: 1 }}>
              <ExploreList contacts={contacts} />
            </ScrollView>
          </Tab>
          <Tab heading="Other">
            <ScrollView style={{ flex: 1 }}>
              <ExploreList contacts={contacts} />
            </ScrollView>
          </Tab>
          <Tab heading="Tab 3">
            <ScrollView style={{ flex: 1 }}>
              <ExploreList contacts={contacts} />
            </ScrollView>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

ExploreTabs.propTypes = {
  contacts: PropTypes.array.isRequired
};
