import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ExploreScreen from '../screens/Explore/ExploreScreen';
import DoScreen from '../screens/Do/DoScreen';
import SettingsScreen from '../screens/SettingsScreen';

/* eslint-disable */

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: ExploreScreen
  },
  config
);

HomeStack.navigationOptions = {
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

HomeStack.path = '';

const DoStack = createStackNavigator(
  {
    Do: DoScreen
  },
  config
);

DoStack.navigationOptions = {
  tabBarLabel: 'Do',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
};

DoStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    DoStack,
    HomeStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      showLabel: true,
      showIcon: true
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;
