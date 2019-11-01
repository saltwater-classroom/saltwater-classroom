import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { StyledButton } from '../shared_components/Buttons';
import ProfileIcon from '../shared_components/ProfileIcon';
import StyledText from '../shared_components/Typography';

export default class ExploreListItem extends React.Component {
  onPress = () => {
    this.props.onPressItem(this.props);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.item}>
          <ProfileIcon />
          <View style={styles.nameAndBio}>
            <StyledText text={this.props.name} />
            <Text numberOfLines={2}>{this.props.bio}</Text>
          </View>
          <StyledButton
            style={styles.button}
            onPress={() => Alert.alert('Simple Button pressed')}
            text="send"
          />
        </View>
      </TouchableOpacity>
    );
  }
}

ExploreListItem.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  onPressItem: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    borderColor: '#eaa43a',
    borderWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  nameAndBio: {
    flexDirection: 'column',
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20
  },
  profile: {
    width: 40,
    height: 40,
    flex: 1
  }
});
