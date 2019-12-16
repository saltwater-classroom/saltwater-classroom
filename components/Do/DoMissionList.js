import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ScrollView, FlatList, StyleSheet } from 'react-native';
import DoMissionListItem from './DoMissionListItem';
import ModalView from '../shared_components/ModalView';
import DoMissionModalView from './DoMissionModalView';
import DoMissionCompletedModalView from './DoMissionCompletedModalView';
import * as Actions from '../../app/actions/Do/do';

// These Fields will create a login form with three fields
const fields = [
  {
    type: 'text',
    name: 'q1',
    required: true,
    label: 'What beach did you go to?'
  },
  {
    type: 'text',
    name: 'q2',
    required: true,
    label: 'How much trash did you pick up?'
  },
  {
    type: 'text',
    name: 'user_name',
    required: true,
    label: 'Did you see anything interesting?'
  }
];

export class DoMissionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMissionModalVisible: false,
      isMissionCompletedModalVisible: false,
      view: null,
      missionCompletedView: null,
      selectedItem: null
    };
  }

  onPressMissionItem = item => {
    this.showModal(item);
    this.props.getBadgeFromMission(item.id);

    this.setState({
      view: this.createMissionModalView(item),
      selectedItem: item
    });
  };

  onPressMissionSubmit = () => {
    this.setState(prevState => ({
      isMissionModalVisible: !prevState.isMissionModalVisible
    }));

    const { selectedItem } = this.state;

    // for some reason, ios needs this timer. Otherwise, this modal doesn't pop up :(
    setTimeout(() => {
      this.setState(prevState => ({
        isMissionCompletedModalVisible: !prevState.isMissionCompletedModalVisible,
        missionCompletedView: this.createMissionCompletedView(selectedItem)
      }));
    }, 500);
  };

  createMissionModalView = item => {
    return (
      <DoMissionModalView
        name={item.name}
        description={item.task}
        fields={fields}
        openNextModal={this.onPressMissionSubmit}
      />
    );
  };

  createMissionCompletedView = item => {
    const titleMessage = `${item.name} completed!`;
    return (
      <DoMissionCompletedModalView title={titleMessage} updatedBadge={this.props.updatedBadge} />
    );
  };

  hideMissionModal = () => {
    this.setState(prevState => ({
      isMissionModalVisible: !prevState.isMissionModalVisible
    }));
  };

  hideMissionCompletedModal = () => {
    this.setState(prevState => ({
      isMissionCompletedModalVisible: !prevState.isMissionCompletedModalVisible
    }));
  };

  showModal = () => this.setState({ isMissionModalVisible: true });

  showMissionCompleteModal = () => this.setState({ isMissionCompletedModalVisible: true });

  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={this.props.missions}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <DoMissionListItem name={item.name} onPressItem={() => this.onPressMissionItem(item)} />
          )}
          keyExtractor={item => item.id}
        />
        {this.state.isMissionModalVisible && (
          <ModalView
            view={this.state.view}
            modalVisible={this.state.isMissionModalVisible}
            hideModal={this.hideMissionModal}
          />
        )}

        {this.state.isMissionCompletedModalVisible && (
          <ModalView
            view={this.state.missionCompletedView}
            modalVisible={this.state.isMissionCompletedModalVisible}
            hideModal={this.hideMissionCompletedModal}
          />
        )}
      </ScrollView>
    );
  }
}

DoMissionList.defaultProps = {
  updatedBadge: {}
};

DoMissionList.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired
    })
  ).isRequired,
  getBadgeFromMission: PropTypes.func.isRequired,
  updatedBadge: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  columnWrapper: {
    justifyContent: 'space-around'
  }
});

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, props) {
  return {
    loading: state.doScreen.loading,
    updatedBadge: state.doScreen.updatedBadge
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
)(DoMissionList);
