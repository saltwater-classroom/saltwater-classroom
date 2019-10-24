import React, { Component } from 'react';
import { Container, Title } from 'native-base';
import Constants from 'expo-constants';

export default class TopBar extends Component {
  render() {
    return (
      <Container style={{ marginTop: Constants.statusBarHeight }}>
        <Title style={{ color: '#000000' }}>Saltwater Classroom</Title>
      </Container>
    );
  }
}
