import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, FlatList, StyleSheet, View, Dimensions } from 'react-native';
import DoBadgesListItem from './DoBadgesListItem';
import DoBadgeModalView from './DoBadgeModalView';
import ModalView from '../shared_components/ModalView';

const formatData = (data, numColumns) => {
  if (data === undefined) {
    return [];
  }
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow += 1;
  }

  return data;
};

const numColumns = 2;

export default class DoBadgesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      view: null
    };
  }

  onPressItem = item => {
    this.showModal(item);
    this.setState({
      view: this.createModalView(item)
    });
  };

  createModalView = item => {
    return (
      <DoBadgeModalView
        name={item.name}
        percent={item.percent}
        goalMessage={item.goalMessage}
        id={item.id}
      />
    );
  };

  hideMyModal = () => {
    this.setState({ isModalVisible: false });
  };

  showModal = () => this.setState({ isModalVisible: true });

  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={formatData(this.props.badges, numColumns)}
          numColumns={numColumns}
          horizontal={false}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => {
            const screenWidth = Math.round(Dimensions.get('window').width);
            if (item.empty === true) {
              return <View style={{ width: screenWidth / numColumns }} />;
            }
            return (
              <DoBadgesListItem
                percent={item.percent}
                id={item.id}
                width={screenWidth / numColumns}
                onPressItem={() => this.onPressItem(item)}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
        {this.state.isModalVisible && (
          <ModalView
            view={this.state.view}
            modalVisible={this.state.isModalVisible}
            hideModal={this.hideMyModal}
          />
        )}
      </ScrollView>
    );
  }
}

DoBadgesList.propTypes = {
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      percent: PropTypes.number.isRequired,
      goalMessage: PropTypes.string.isRequired
    })
  ).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  columnWrapper: {
    justifyContent: 'space-around'
  }
});
