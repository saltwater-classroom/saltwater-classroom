import React, { Component } from 'react';
import { View } from 'react-native';
import { Item, Input, Icon, Button, Text } from 'native-base';

export default class SearchBar extends Component {
  render() {
    return (
      <View>
        <Item>
          <Input placeholder="Search" />
          <Icon name="ios-search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </View>
    );
  }
}
