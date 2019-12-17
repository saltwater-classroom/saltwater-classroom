import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import OnboardingButton from '../../components/Onboarding/OnboardingButton';

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'MainScreen'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bottom}>
          <OnboardingButton
            onPress={() => this.props.navigation.navigate('EnterEmailPasswordScreen')}
            text="Login"
          />
          <OnboardingButton
            onPress={() => this.props.navigation.navigate('EnterCodeScreen')}
            text="Sign Up"
            inverted
          />
        </View>
      </View>
    );
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    alignItems: 'center'
  }
});
