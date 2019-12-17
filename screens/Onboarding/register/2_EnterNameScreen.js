import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import StyledText from '../../../components/shared_components/Typography';
import OnboardingButton from '../../../components/Onboarding/OnboardingButton';
import OnboardingTextInput from '../../../components/Onboarding/OnboardingTextInput';

const heading = "Enter your child's first name and last initial";
const subHeading = 'Other Saltwater Classroom students will see this.';

export default class EnterNameScreen extends Component {
  static navigationOptions = {
    title: 'EnterNameScreen'
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <Text>Back to Enter Code</Text>
        </TouchableHighlight>
        <StyledText textType="head" text={heading} fontColor="whiteSands" />
        <StyledText textType="subHead2" text={subHeading} fontColor="whiteSands" />
        <View style={styles.row}>
          <OnboardingTextInput flex={6} maxLength={20} />
          <OnboardingTextInput flex={1} maxLength={1} autoFocus={false} />
        </View>
        <View style={styles.bottom}>
          <OnboardingButton
            onPress={() => this.props.navigation.navigate('EnterEmailScreen')}
            text="Next"
          />
        </View>
      </View>
    );
  }
}

EnterNameScreen.propTypes = {
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
