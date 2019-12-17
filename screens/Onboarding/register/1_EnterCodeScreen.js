import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import OnboardingCodeInput from '../../../components/Onboarding/OnboardingCodeInput';
import StyledText from '../../../components/shared_components/Typography';
import OnboardingButton from '../../../components/Onboarding/OnboardingButton';

const heading = 'Enter your Saltwater Classroom code';
const subHeading = 'You should recieve this code at the end of the workshop.';

export default class EnterCodeScreen extends Component {
  static navigationOptions = {
    title: 'EnterCodeScreen'
  };

  validateCode() {
    // code validation
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <Text>Back to Main Screen</Text>
        </TouchableHighlight>
        <StyledText textType="head" text={heading} fontColor="whiteSands" />
        <StyledText textType="subHead2" text={subHeading} fontColor="whiteSands" />
        <View style={styles.row}>
          <OnboardingCodeInput space={5} keyboardType="numeric" onFulfill={this.validateCode()} />
        </View>
        <View style={styles.bottom}>
          <OnboardingButton
            onPress={() => this.props.navigation.navigate('EnterNameScreen')}
            text="Next"
          />
        </View>
      </View>
    );
  }
}

EnterCodeScreen.propTypes = {
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
    marginBottom: 30,
    alignItems: 'center'
  }
});
