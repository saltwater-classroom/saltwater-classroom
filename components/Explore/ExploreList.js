import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, FlatList, StyleSheet, Dimensions } from 'react-native';
import ProfileView from '../shared_components/ProfileView';
import ExploreListItem from './ExploreListItem';
import ModalView from '../shared_components/ModalView';

const numColumns = 2;
const screenWidth = Math.round(Dimensions.get('window').width);
const itemWidth = screenWidth / numColumns;

export default class ExploreList extends React.Component {
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
      view: <ProfileView name={item.name} bio={item.bio} />
    });
  };

  hideMyModal = () => {
    this.setState({ isModalVisible: false });
  };

  showModal = () => this.setState({ isModalVisible: true });

  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          numColumns={numColumns}
          data={this.props.contacts}
          columnWrapperStyle={styles.space}
          renderItem={({ item }) => (
            <ExploreListItem
              itemWidth={itemWidth}
              name={item.name}
              bio={item.bio}
              onPressItem={() => this.onPressItem(item)}
            />
          )}
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

ExploreList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'space-around'
  },
  space: {
    justifyContent: 'space-around',
    marginBottom: 20
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
