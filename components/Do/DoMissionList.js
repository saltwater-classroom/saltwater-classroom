import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, FlatList, StyleSheet } from 'react-native';
import DoMissionListItem from './DoMissionListItem';
import ModalView from '../shared_components/ModalView';
import DoMissionModalView from './DoMissionModalView';
import DoMissionCompletedModalView from './DoMissionCompletedModalView';

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

export default class DoMissionList extends React.Component {
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
        description="this is the description"
        fields={fields}
        openNextModal={this.onPressMissionSubmit}
      />
    );
  };

  createMissionCompletedView = item => {
    return <DoMissionCompletedModalView id={item.id} name={item.name} />;
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

DoMissionList.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});
