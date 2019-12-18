import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import StyledText from '../../../components/shared_components/Typography';
import OnboardingButton from '../../../components/Onboarding/OnboardingButton';
import OnboardingTextInput from '../../../components/Onboarding/OnboardingTextInput';

const heading = 'Enter the password you want to use for this account';
const subHeading = 'Remember: this is for only you to know.';

export default class CreatePasswordScreen extends Component {
  static navigationOptions = {
    title: 'CreatePasswordScreen'
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <Text>Back</Text>
        </TouchableHighlight>
        <StyledText textType="head" text={heading} fontColor="whiteSands" />
        <StyledText textType="subHead2" text={subHeading} fontColor="whiteSands" />
        <View style={styles.row}>
          <OnboardingTextInput flex={1} secureTextEntry />
        </View>
        <View style={styles.bottom}>
          <OnboardingButton
            onPress={() => this.props.navigation.navigate('GuidelinesScreen')}
            text="Next"
          />
        </View>
      </View>
    );
  }
}

CreatePasswordScreen.propTypes = {
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
