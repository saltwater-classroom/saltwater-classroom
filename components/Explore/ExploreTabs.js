import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Tab, Tabs } from 'native-base';

import ExploreList from './ExploreList';

const myPeers = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Cassidy H.',
    bio: 'Dolphins are my favorite animal!',
    icon: ''
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Dania A.',
    bio: 'I love penguins!',
    icon: ''
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Jay A.',
    bio: 'SBaby shark, doo doo doo doo doo doo',
    icon: ''
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    name: 'Kincaid O.',
    bio: 'The ocean is so big.',
    icon: ''
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    name: 'Barrack O.',
    bio: 'I love the environment.',
    icon: ''
  }
];

const others = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Anika J.',
    bio: 'Finding Nemo is my favorite movie.',
    icon: ''
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Celine Y.',
    bio: 'I like starfish.',
    icon: ''
  }
];

export default class ExploreTabs extends Component {
  render() {
    return (
      <ScrollView>
        <Tabs tabBarPosition="top">
          <Tab heading="My Peers">
            <View style={{ flex: 1 }}>
              <ExploreList contacts={myPeers} />
            </View>
          </Tab>
          <Tab heading="Other">
            <ExploreList contacts={others} />
          </Tab>
          <Tab heading="Tab 3">
            <ExploreList contacts={myPeers} />
          </Tab>
        </Tabs>
      </ScrollView>
    );
  }
}
