import React from 'react';
import PropTypes from 'prop-types';

import { ScrollView, StyleSheet, Dimensions, FlatList, View, TouchableOpacity } from 'react-native';

import StyledText from '../shared_components/Typography';

const SearchItem = ({ item }) => {
  const { name, numResults } = item;
  return (
    <View>
      <StyledText textType="subHead3" text={name} fontColor="whiteSands" />
      <StyledText textType="body" text={numResults} fontColor="oceanFloor" />
    </View>
  );
};

SearchItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default class SearchLearnModalView extends React.Component {
  render() {
    return (
      <ScrollView>
        <FlatList
          data={[
            { id: 1, name: 'lobsters', numResults: 3 },
            { id: 2, name: 'starfish', numResults: 2 }
          ]}
          numColumns={2}
          horizontal={false}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => {
            const screenWidth = Math.round(Dimensions.get('window').width);
            return (
              <TouchableOpacity
                onPress={this.props.onItemClick}
                style={{
                  width: screenWidth / 2 - 40,
                  height: 104,
                  borderRadius: 12,
                  backgroundColor: '#43A7A8',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <SearchItem item={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    );
  }
}

SearchLearnModalView.propTypes = {
  onItemClick: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 30
  },
  columnWrapper: {
    justifyContent: 'space-around',
    paddingLeft: 8,
    marginBottom: 8
  },
  spacing: {
    marginBottom: 29,
    paddingLeft: 20,
    paddingRight: 20
  }
});
