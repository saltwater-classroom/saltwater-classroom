import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
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
          <StyledText textType="body" text={ruleOne} fontColor="oceanFloor" />
        </View>
        <View style={styles.rule}>
          <Text style={styles.ruleStyle}>{ruleTwoHeading}</Text>
          <StyledText textType="body" text={ruleTwo} fontColor="oceanFloor" />
        </View>
        <View style={styles.rule}>
          <Text style={styles.ruleStyle}>{ruleThreeHeading}</Text>
          <StyledText textType="body" text={ruleThree} fontColor="oceanFloor" />
        </View>
        <TouchableOpacity
          style={styles.bottom}
          onPress={() => this.props.navigation.navigate('SelectAvatarScreen')}>
          <Text style={styles.linkStyle}>I Agree</Text>
        </TouchableOpacity>
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
    margin: 20
  },
  rule: {
    alignItems: 'flex-start',
    marginTop: 20
  },
  bottom: {
    marginTop: 50,
    alignItems: 'center'
  },
  linkStyle: {
    fontFamily: textType.bodyBold.fontFamily,
    color: baseColors.whiteSands,
    fontSize: textType.subHead2.fontSize
  },
  ruleStyle: {
    color: baseColors.oceanFloor,
    fontFamily: textType.bodyBold.fontFamily,
    fontSize: textType.subHead.fontSize
  }
});
