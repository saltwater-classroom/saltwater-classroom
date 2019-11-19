import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import ProfileIcon from '../shared_components/ProfileIcon';
import StyledText from '../shared_components/Typography';

export default class ExploreListItem extends React.Component {
  onPress = () => {
    this.props.onPressItem(this.props);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={[styles.box, styles.shadow, { width: this.props.itemWidth - 8 }]}>
          <ProfileIcon width={60} height={60} style={{ paddingBottom: 20 }} />
          <View style={styles.nameAndBioContainer}>
            <StyledText textType="bodyBold" text={this.props.name} style={styles.nameAndBio} />
            <StyledText
              textType="body"
              numLines={2}
              text={this.props.bio}
              style={styles.nameAndBio}
            />
          </View>
          {/* <StyledButton
            style={styles.button}
            onPress={() => Alert.alert('Simple Button pressed')}
            text="send"
          /> */}
        </View>
      </TouchableOpacity>
    );
  }
}

ExploreListItem.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  onPressItem: PropTypes.func.isRequired,
  itemWidth: PropTypes.number.isRequired
};

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

const styles = StyleSheet.create({
  shadow: elevationShadowStyle(5),

  box: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameAndBioContainer: {
    flexDirection: 'column',
    flex: 0.5,
    paddingLeft: 20,
    paddingRight: 20
  },
  nameAndBio: {
    textAlign: 'center'
  },
  profile: {
    width: 40,
    height: 40,
    flex: 1
  }
});
