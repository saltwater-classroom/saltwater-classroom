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
    const defaultItem = { name: 'name', id: '2' };
    this.state = {
      isMissionModalVisible: false,
      isMissionCompletedModalVisible: false,
      selectedItem: defaultItem
    };
  }

  onPressMissionItem = item => {
    this.showModal(item);
    this.setState({
      selectedItem: item
    });
  };

  onPressMissionSubmit = () => {
    this.setState(prevState => ({
      isMissionModalVisible: !prevState.isMissionModalVisible
    }));

    // for some reason, ios needs this timer. Otherwise, this modal doesn't pop up :(
    setTimeout(() => {
      this.setState(prevState => ({
        isMissionCompletedModalVisible: !prevState.isMissionCompletedModalVisible
      }));
    }, 500);
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
    const { selectedItem } = this.state;

    const doMissionModalView = (
      <DoMissionModalView
        name={selectedItem.name}
        description="this is the description"
        fields={fields}
        openNextModal={this.onPressMissionSubmit}
      />
    );

    const doMissionCompletedModalView = (
      <DoMissionCompletedModalView id={selectedItem.id} name={selectedItem.name} />
    );
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
            view={doMissionModalView}
            modalVisible={this.state.isMissionModalVisible}
            hideModal={this.hideMissionModal}
          />
        )}

        {this.state.isMissionCompletedModalVisible && (
          <ModalView
            view={doMissionCompletedModalView}
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
