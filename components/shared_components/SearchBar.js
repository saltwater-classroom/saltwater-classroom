import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Input placeholder="Search" />
            <Icon name="ios-search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     height: 200,
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: 'black'
//   }
// });
