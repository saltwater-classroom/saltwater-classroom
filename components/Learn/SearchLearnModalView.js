import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import StyledText from '../shared_components/Typography';
import SearchBar from '../shared_components/SearchBar';

export default class SearchLearnModalView extends React.Component {
  render() {
    return (
      <ScrollView style={styles.item}>
        <SearchBar />
        <StyledText
          textType="body"
          text="Search results go here"
          fontColor="coralReef"
          style={styles.spacing}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 30
  },
  spacing: {
    marginBottom: 29,
    paddingLeft: 20,
    paddingRight: 20
  }
});
