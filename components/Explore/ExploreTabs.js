import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tab, Tabs } from 'native-base';
import PropTypes from 'prop-types';

import ExploreList from './ExploreList';

export default class ExploreTabs extends Component {
  render() {
    const { contacts } = this.props;

    return (
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
    );
  }
}

ExploreTabs.propTypes = {
  contacts: PropTypes.array.isRequired
};
