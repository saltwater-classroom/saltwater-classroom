import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import OnboardingButton from '../../../components/Onboarding/OnboardingButton';
import StyledText from '../../../components/shared_components/Typography';

const heading = "Let's build your bio!";
const subHeading = "What's your favorite ocean activity?";

export default class CreateBioScreen extends Component {
  static navigationOptions = {
    title: 'CreateBio'
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Back to Enter Code</Text>
        </TouchableOpacity>
        <StyledText textType="head" text={heading} fontColor="whiteSands" />
        <StyledText textType="subHead2" text={subHeading} fontColor="whiteSands" />
        <View style={styles.bottom}>
          <OnboardingButton onPress={() => {}} text="Done" />
        </View>
      </View>
    );
  }
}

CreateBioScreen.propTypes = {
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
