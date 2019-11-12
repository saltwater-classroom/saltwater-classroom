import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import * as Actions from '../../app/actions/Learn/learn';

import ModalView from '../shared_components/ModalView';
import SpeciesProfileModalView from './SpeciesProfileModalView';

import StyledText from '../shared_components/Typography';
import DoMissionCompletedModalView from '../Do/DoMissionCompletedModalView';

export class SpeciesProfileCarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isBadgeCompletedModalVisible: false
    };
  }

  onPressItem = speciesProfileId => {
    console.log(speciesProfileId);
    this.showModal();
  };

  hideMyModal = () => this.setState({ isModalVisible: false });

  hideBadgeCompletedModal = () => this.setState({ isBadgeCompletedModalVisible: false });

  showModal = () => this.setState({ isModalVisible: true });

  showBadgeCompletedModal = () => {
    this.setState({
      isBadgeCompletedModalVisible: true
    });
  };

  render() {
    const { width, speciesName, imageUrl, speciesProfileId, updatedBadge } = this.props;
    const modalView = !this.state.isBadgeCompletedModalVisible ? (
      <SpeciesProfileModalView speciesProfileId={speciesProfileId} />
    ) : (
      <DoMissionCompletedModalView updatedBadge={updatedBadge} title="Congrats!" />
    );

    return (
      <TouchableOpacity onPress={() => this.onPressItem(speciesProfileId)}>
        <View style={styles.container}>
          <Image style={{ width, height: 150, borderRadius: 10 }} source={{ uri: imageUrl }} />
          <StyledText
            numLines={1}
            textType="body"
            text={speciesName}
            fontColor="tidepool"
            style={styles.spacing}
          />
        </View>

        {this.state.isModalVisible && (
          <ModalView
            view={modalView}
            modalVisible={this.state.isModalVisible}
            hideModal={this.hideMyModal}
          />
        )}
      </TouchableOpacity>
    );
  }
}

SpeciesProfileCarouselItem.defaultProps = {
  updatedBadge: { name: 'defaultName', percent: 20 }
};

SpeciesProfileCarouselItem.propTypes = {
  speciesProfileId: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  speciesName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  updatedBadge: PropTypes.shape({
    name: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired
  })
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: 'auto',
    borderRadius: 10
  },
  spacing: {
    marginTop: 7
  }
});

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, props) {
  return {
    loading: state.learnScreen.loading,
    updatedBadge: state.learnScreen.updatedBadge
  };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions
// file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

// Connect everything
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeciesProfileCarouselItem);
