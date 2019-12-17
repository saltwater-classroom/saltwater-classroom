import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import ExploreScreen from '../screens/Explore/ExploreScreen';
import DoScreen from '../screens/Do/DoScreen';
import LearnScreen from '../screens/Learn/LearnScreen';
import ConnectRecentScreen from '../screens/Connect/ConnectRecentScreen';
import ConnectWriteLetterScreen from '../screens/Connect/ConnectWriteLetterScreen';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';

import { baseColors } from '../components/shared_components/Colors';

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
  tabBarIcon: ({ focused }) => {
    return focused ? (
      <Image
        source={require('../assets/images/navIcons/community_filled.png')}
        style={{ width: 50, height: 50 }}
      />
    ) : (
      <Image
        source={require('../assets/images/navIcons/community.png')}
        style={{ width: 50, height: 50 }}
      />
    );
  }
};

HomeStack.path = '';

const LearnStack = createStackNavigator(
  {
    Learn: LearnScreen
  },
  config
);

LearnStack.navigationOptions = {
  tabBarLabel: 'Do',
  header: null,
  tabBarIcon: ({ focused }) => {
    return focused ? (
      <Image
        source={require('../assets/images/navIcons/learn_filled.png')}
        style={{ width: 50, height: 50 }}
      />
    ) : (
      <Image
        source={require('../assets/images/navIcons/learn.png')}
        style={{ width: 50, height: 50 }}
      />
    );
  }
};

LearnStack.path = '';

const DoStack = createStackNavigator(
  {
    Do: DoScreen
  },
  config
);

DoStack.navigationOptions = {
  tabBarLabel: 'Do',
  header: null,
  tabBarIcon: ({ focused }) => {
    return focused ? (
      <Image
        source={require('../assets/images/navIcons/do_filled.png')}
        style={{ width: 50, height: 50 }}
      />
    ) : (
      <Image
        source={require('../assets/images/navIcons/do.png')}
        style={{ width: 50, height: 50 }}
      />
    );
  }
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
  tabBarIcon: ({ focused }) => {
    return focused ? (
      <Image
        source={require('../assets/images/navIcons/connect_filled.png')}
        style={{ width: 50, height: 50 }}
      />
    ) : (
      <Image
        source={require('../assets/images/navIcons/connect.png')}
        style={{ width: 50, height: 50 }}
      />
    );
  }
};

ConnectStack.path = '';

const OnboardingStack = createStackNavigator(
  {
    Onboarding: OnboardingScreen
  },
  config
);

OnboardingStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    OnboardingStack,
    DoStack,
    LearnStack,
    HomeStack,
    ConnectStack
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      header: null,
      style: {
        backgroundColor: baseColors.whiteSands
      }
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;
