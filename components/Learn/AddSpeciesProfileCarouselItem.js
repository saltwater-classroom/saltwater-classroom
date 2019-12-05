import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { StyleSheet, View, TouchableOpacity } from 'react-native';
import * as Actions from '../../app/actions/Learn/learn';

import ModalView from '../shared_components/ModalView';
import AddSpeciesModalView from './AddSpeciesModalView';
import DoMissionCompletedModalView from '../Do/DoMissionCompletedModalView';

import StyledText from '../shared_components/Typography';

export class AddSpeciesProfileCarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isBadgeCompletedModalVisible: false
    };
  }

  onPressItem = () => {
    this.showModal();
  };

  hideMyModal = () =>
    this.setState({
      isModalVisible: false,
      isBadgeCompletedModalVisible: false
    });

  showModal = () => this.setState({ isModalVisible: true });

  showBadgeCompletedModal = () => {
    this.props.getBadgeFromLearn(11);
    this.setState({
      isBadgeCompletedModalVisible: true
    });
  };

  render() {
    const { isBadgeCompletedModalVisible } = this.state;
    const modalView = !isBadgeCompletedModalVisible ? (
      <AddSpeciesModalView openNextModal={this.showBadgeCompletedModal} />
    ) : (
      <DoMissionCompletedModalView updatedBadge={this.props.updatedBadge} title="Congrats!" />
    );

    return (
      <TouchableOpacity onPress={() => this.onPressItem()}>
        <View style={styles.container}>
          <StyledText
            numLines={1}
            textType="body"
            text="add"
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

AddSpeciesProfileCarouselItem.defaultProps = {
  updatedBadge: { name: 'defaultBadge', percent: 20 }
};

AddSpeciesProfileCarouselItem.propTypes = {
  updatedBadge: PropTypes.shape({
    name: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired
  }),
  getBadgeFromLearn: PropTypes.func.isRequired
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
)(AddSpeciesProfileCarouselItem);
