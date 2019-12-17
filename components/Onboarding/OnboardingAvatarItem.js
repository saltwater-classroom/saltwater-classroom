import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { baseColors } from '../shared_components/Colors';

export default class OnboardingAvatarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  toggleSelect() {
    if (!this.state.selected) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  }

  render() {
    const { source } = this.props;
    return (
      <TouchableOpacity style={styles.imageContainer} onPress={() => this.toggleSelect()}>
        <Image
          style={this.state.selected ? styles.selectedImage : styles.unselectedImage}
          source={source}
        />
      </TouchableOpacity>
    );
  }
}

OnboardingAvatarItem.propTypes = {
  source: PropTypes.string.isRequired
};

const base = StyleSheet.create({
  dimensions: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    overflow: 'hidden',
    borderColor: baseColors.goldStar,
    borderWidth: 3
  }
});

const styles = StyleSheet.create({
  imageContainer: {
    ...base.dimensions,
    ...base.imageContainer
  },
  selectedImage: {
    ...base.dimensions,
    ...base.image,
    borderColor: baseColors.goldStar
  },
  unselectedImage: {
    ...base.dimensions,
    ...base.image,
    borderColor: baseColors.whiteSands
  }
});
