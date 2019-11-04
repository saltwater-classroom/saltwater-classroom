import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import StyledText from '../shared_components/Typography';
import { darkColors } from '../shared_components/Colors';

export default class DoMissionListItem extends React.Component {
  onPress = () => {
    this.props.onPressItem(this.props);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.item}>
          <View style={styles.name}>
            <StyledText text={this.props.name} fontColor="whiteSands" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

DoMissionListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onPressItem: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 50,
    backgroundColor: darkColors.tidepoolDark,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  name: {
    flexDirection: 'column',
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center'
  }
});
