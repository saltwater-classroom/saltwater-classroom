import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import OnboardingButton from '../../../components/Onboarding/OnboardingButton';
import { baseColors } from '../../../components/shared_components/Colors';
import StyledText, { textType } from '../../../components/shared_components/Typography';

const heading = "Here's what you need to know";
const subHeading = 'Review these community guidelines with your child.';

const ruleOneHeading = 'Be Kind';
const ruleOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing.';

const ruleTwoHeading = 'Be Responsible';
const ruleTwo = 'Lorem ipsum dolor sit amet, consectetur adipiscing.';

const ruleThreeHeading = 'Have Fun';
const ruleThree = 'Lorem ipsum dolor sit amet, consectetur adipiscing.';

export default class GuidelinesScreen extends Component {
  static navigationOptions = {
    title: 'GuidelinesScreen'
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Back to Enter Code</Text>
        </TouchableOpacity>
        <StyledText textType="head" text={heading} fontColor="whiteSands" />
        <StyledText textType="subHead2" text={subHeading} fontColor="whiteSands" />
        <View style={styles.rule}>
          <Text style={styles.ruleStyle}>{ruleOneHeading}</Text>
          <StyledText textType="body" text={ruleOne} fontColor="whiteSands" />
        </View>
        <View style={styles.rule}>
          <Text style={styles.ruleStyle}>{ruleTwoHeading}</Text>
          <StyledText textType="body" text={ruleTwo} fontColor="whiteSands" />
        </View>
        <View style={styles.rule}>
          <Text style={styles.ruleStyle}>{ruleThreeHeading}</Text>
          <StyledText textType="body" text={ruleThree} fontColor="whiteSands" />
        </View>
        <View style={styles.bottom}>
          <OnboardingButton
            onPress={() => this.props.navigation.navigate('SelectAvatarScreen')}
            text="Next"
          />
        </View>
      </View>
    );
  }
}

GuidelinesScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1
  },
  rule: {
    alignItems: 'flex-start',
    marginTop: 20
  },
  ruleStyle: {
    color: baseColors.whiteSands,
    fontFamily: textType.bodyBold.fontFamily,
    fontSize: textType.subHead.fontSize
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center'
  }
});
