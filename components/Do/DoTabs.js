import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Tab, Tabs } from 'native-base';
import PropTypes from 'prop-types';

import DoBadgesList from './DoBadgesList';
import DoMissionList from './DoMissionList';
import { baseColors, darkColors, lightColors } from '../shared_components/Colors';
import { textType } from '../shared_components/Typography';

export default class DoTabs extends Component {
  render() {
    const { missions, badges } = this.props;

    return (
      <Tabs
        tabBarPosition="top"
        tabContainerStyle={{ elevation: 0 }}
        tabBarUnderlineStyle={{ backgroundColor: 'transparent' }}>
        <Tab
          heading="Badges"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.tabStyle}
          textStyle={{ ...styles.textStyle, ...textType.subHead }}
          activeTextStyle={{ ...styles.activeTextStyle, ...textType.subHead }}>
          <ScrollView style={{ flex: 1, backgroundColor: baseColors.whiteSands }}>
            <DoBadgesList badges={badges} />
          </ScrollView>
        </Tab>
        <Tab
          heading="Missions"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.tabStyle}
          textStyle={{ ...styles.textStyle, ...textType.subHead }}
          activeTextStyle={{ ...styles.activeTextStyle, ...textType.subHead }}>
          <ScrollView style={{ flex: 1, backgroundColor: baseColors.whiteSands }}>
            <DoMissionList missions={missions} />
          </ScrollView>
        </Tab>
      </Tabs>
    );
  }
}

DoTabs.propTypes = {
  missions: PropTypes.array.isRequired,
  badges: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: baseColors.whiteSands
  },
  textStyle: {
    color: lightColors.tidepoolLight
  },
  activeTextStyle: {
    color: darkColors.tidepoolDark
  }
});
