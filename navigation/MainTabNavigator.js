import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ExploreScreen from '../screens/Explore/ExploreScreen';
import DoScreen from '../screens/Do/DoScreen';
import LearnScreen from '../screens/Learn/LearnScreen';
import ConnectRecentScreen from '../screens/Connect/ConnectRecentScreen';
import ConnectWriteLetterScreen from '../screens/Connect/ConnectWriteLetterScreen';

/* eslint-disable */

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: ExploreScreen
  },
  {
    initialRouteName: 'Home'
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

HomeStack.path = '';

const LearnStack = createStackNavigator(
  {
    Learn: LearnScreen
  },
  {
    initialRouteName: 'Learn'
  },
  config
);

LearnScreen.navigationOptions = {
  header: null,
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

LearnScreen.path = '';

const DoStack = createStackNavigator(
  {
    Do: DoScreen
  },
  config
);

DoStack.navigationOptions = {
  tabBarLabel: 'Do',
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
};

DoStack.path = '';

const ConnectStack = createStackNavigator(
  {
    ConnectWriteLetter: { screen: ConnectWriteLetterScreen },
    ConnectRecent: { screen: ConnectRecentScreen }
  },
  config
);

ConnectStack.navigationOptions = {
  tabBarLabel: 'Connect',
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
};

ConnectStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    DoStack,
    LearnStack,
    HomeStack,
    ConnectStack
  },
  {
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      header: null
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;
