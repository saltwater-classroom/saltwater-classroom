/* eslint-disable */
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import TopBar from './topbar/TopBar';
import store from './app/store';

import { baseColors } from './components/shared_components/Colors';

/* eslint-disable */

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <View style={{ flex: 1, backgroundColor: baseColors.whiteSands }}>
        <TopBar />
      </View>
      <View style={{ flex: 9 }}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    </SafeAreaView>
  );
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
      require('./assets/images/user.png')
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      'nunito-sans-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
      'nunito-sans-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
      'zilla-slab-italic': require('./assets/fonts/ZillaSlab-Italic.ttf')
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
