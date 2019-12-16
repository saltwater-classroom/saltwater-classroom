import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import BadgeProgress from '../shared_components/BadgeProgress';

export default class DoBadgesListItem extends React.Component {
  onPress = () => {
    this.props.onPressItem(this.props);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={[styles.item, { width: this.props.width }]}>
          <BadgeProgress percent={this.props.percent} id={this.props.id} />
        </View>
      </TouchableOpacity>
    );
  }
}

DoBadgesListItem.defaultProps = {
  width: 200
};

DoBadgesListItem.propTypes = {
  percent: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onPressItem: PropTypes.func.isRequired,
  width: PropTypes.number
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1
  },
  name: {
    flexDirection: 'column',
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20
  }
});
