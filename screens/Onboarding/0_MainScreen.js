import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import OnboardingButton from '../../components/Onboarding/OnboardingButton';

const logo = require('../../assets/images/logo-light.png');

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'MainScreen'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={logo} />
        </View>
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
    margin: 20
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  image: {
    marginTop: 150
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center'
  }
});
