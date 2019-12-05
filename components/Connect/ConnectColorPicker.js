import React, { Component } from 'react';
import { ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import ConnectColorPickerItem from './ConnectColorPickerItem';

export default class ConnectColorPicker extends Component {
  render() {
    const { activeItem, colors } = this.props;

    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={colors}
          numColumns={3}
          horizontal={false}
          extraData={this.props}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => this.props.onSelect(item)}>
                <ConnectColorPickerItem color={item} activeItem={activeItem} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item}
        />
      </ScrollView>
    );
  }
}

ConnectColorPicker.propTypes = {
  activeItem: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  columnWrapper: {
    justifyContent: 'space-around'
  }
});
