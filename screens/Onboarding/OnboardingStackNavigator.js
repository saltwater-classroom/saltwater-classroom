import { createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { baseColors } from '../../components/shared_components/Colors';

// Main Screen
import MainScreen from './0_MainScreen';

// Register
import EnterCodeScreen from './register/1_EnterCodeScreen';
import EnterNameScreen from './register/2_EnterNameScreen';
import EnterEmailScreen from './register/3_EnterEmailScreen';
import CreatePasswordScreen from './register/4_CreatePasswordScreen';
import GuidelinesScreen from './register/5_GuidelinesScreen';
import SelectAvatarScreen from './register/6_SelectAvatarScreen';
import CreateBioScreen from './register/7_CreateBioScreen';

// Login
import EnterEmailPasswordScreen from './login/1_EnterEmailPasswordScreen';

const stackNavigator = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    // Register
    EnterCodeScreen: { screen: EnterCodeScreen },
    EnterNameScreen: { screen: EnterNameScreen },
    EnterEmailScreen: { screen: EnterEmailScreen },
    CreatePasswordScreen: { screen: CreatePasswordScreen },
    GuidelinesScreen: { screen: GuidelinesScreen },
    SelectAvatarScreen: { screen: SelectAvatarScreen },
    CreateBioScreen: { screen: CreateBioScreen },
    // Login
    EnterEmailPasswordScreen: { screen: EnterEmailPasswordScreen }
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
    header: null,
    navigationOptions: {
      headerVisible: false
    },
    cardStyle: { backgroundColor: baseColors.tidepool }
  }
);

const OnboardingContainer = createAppContainer(stackNavigator);

export default class StackNavigator extends Component {
  render() {
    return <OnboardingContainer />;
  }
}
