import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import StyledText from '../shared_components/Typography';
import { darkColors } from '../shared_components/Colors';

const screenWidth = Dimensions.get('window').width;

export default class DoBadgeMissionListItem extends React.Component {
  onPress = () => {
    this.props.onPressItem(this.props);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.item}>
          <View style={styles.name}>
            <StyledText text={this.props.name} textType="subHead3" fontColor="oceanFloor" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

DoBadgeMissionListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onPressItem: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: darkColors.tidepoolDark,
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: screenWidth,
    height: 'auto'
  },
  name: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});
