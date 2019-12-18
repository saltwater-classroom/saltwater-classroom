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
        <View style={styles.column}>
          <View style={styles.row}>
            <OnboardingTextInput flex={1} />
          </View>
          <View style={styles.row}>
            <OnboardingTextInput flex={1} secureTextEntry />
          </View>
        </View>
        <View style={styles.bottom}>
          <OnboardingButton onPress={() => {}} text="Let's Go!" />
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
  column: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20
  },
  row: {
    flexDirection: 'row',
    marginTop: 10
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center'
  }
});
