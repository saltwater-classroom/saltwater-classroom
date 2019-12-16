import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import StyledText from '../shared_components/Typography';
import { darkColors } from '../shared_components/Colors';

const screenWidth = Dimensions.get('window').width;
const halfWidth = screenWidth / 2 - 32;

export default class DoMissionListItem extends React.Component {
  onPress = () => {
    this.props.onPressItem(this.props);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.item}>
          <View style={styles.name}>
            <StyledText text={this.props.name} textType="subHead3" fontColor="whiteSands" />
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
    backgroundColor: darkColors.tidepoolDark,
    padding: 4,
    marginVertical: 8,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: halfWidth,
    height: halfWidth
  },
  name: {
    flexDirection: 'column',
    flex: 2,
    paddingLeft: 4,
    paddingRight: 4,
    alignItems: 'center'
  }
});
