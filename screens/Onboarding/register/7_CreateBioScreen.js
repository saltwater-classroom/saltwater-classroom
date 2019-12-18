import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import OnboardingButton from '../../../components/Onboarding/OnboardingButton';
import OnboardingChips from '../../../components/Onboarding/OnboardingChips';
import StyledText, { textType } from '../../../components/shared_components/Typography';
import { lightColors } from '../../../components/shared_components/Colors';

const heading = "Let's build your bio!";
const subHeading = "What's your favorite ocean activity?";
const chipItems = [
  'dolphin',
  'sea turtle',
  'sea lion',
  'alligator',
  'narwhal',
  'clownfish',
  'starfish',
  'otter',
  'octopus'
];

export default class CreateBioScreen extends Component {
  static navigationOptions = {
    title: 'CreateBio'
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <StyledText textType="head" text={heading} fontColor="whiteSands" />
        <StyledText textType="subHead2" text={subHeading} fontColor="whiteSands" />
        <Text style={styles.requirementsStyle}>Choose up to 3.</Text>
        <View style={styles.row}>
          <OnboardingChips items={chipItems} />
        </View>
        <View style={styles.bottom}>
          <OnboardingButton onPress={() => {}} text="Let's Go!" />
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
    marginBottom: 20,
    alignItems: 'center'
  },
  requirementsStyle: {
    color: lightColors.tidepoolLight,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: textType.head.fontFamily
  }
});
