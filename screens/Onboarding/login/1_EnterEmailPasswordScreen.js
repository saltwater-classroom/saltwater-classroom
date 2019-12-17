import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import StyledText from '../../../components/shared_components/Typography';
import OnboardingButton from '../../../components/Onboarding/OnboardingButton';
import OnboardingTextInput from '../../../components/Onboarding/OnboardingTextInput';

const heading = 'Enter your email and password';

export default class EnterEmailScreen extends Component {
  static navigationOptions = {
    title: 'EnterEmailPasswordScreen'
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <Text>Back</Text>
        </TouchableHighlight>
        <StyledText textType="head" text={heading} fontColor="whiteSands" />
        <View style={styles.row}>
          <OnboardingTextInput flex={1} />
        </View>
        <View style={styles.row}>
          <OnboardingTextInput flex={1} secureTextEntry />
        </View>
        <View style={styles.bottom}>
          <OnboardingButton
            onPress={() => this.props.navigation.navigate('CreatePasswordScreen')}
            text="Let's Go!"
          />
        </View>
      </View>
    );
  }
}

EnterEmailScreen.propTypes = {
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
  row: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center'
  }
});
