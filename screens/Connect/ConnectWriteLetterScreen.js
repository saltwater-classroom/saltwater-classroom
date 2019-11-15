import React from 'react';

import { View } from 'react-native';

import ConnectWriteLetter from '../../components/Connect/ConnectWriteLetter';

export default class ConnectWriteLetterScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ConnectWriteLetter />
      </View>
    );
  }
}
