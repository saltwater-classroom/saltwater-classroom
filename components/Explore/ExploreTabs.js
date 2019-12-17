import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import PropTypes from 'prop-types';

import ExploreList from './ExploreList';

import StyledText from '../shared_components/Typography';
import Tags from '../shared_components/Tags';

import * as Actions from '../../app/actions/Explore/explore';

export class ExploreTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroup: undefined
    };
  }

  componentDidMount() {
    this.props.getGroupsList();
  }

  changeSelected(item) {
    this.props.getUsersInGroup(item.id);
    this.setState({ selectedGroup: item.id });
  }

  renderItem(item, index) {
    const isActive = !this.state.selectedGroup ? index === 0 : this.state.selectedGroup === item.id;
    const isActiveTag = isActive ? (
      <Tags text={item.groupName} outline={false} />
    ) : (
      <Tags text={item.groupName} />
    );
    return (
      <TouchableOpacity onPress={() => this.changeSelected(item)} style={{ height: 55 }}>
        {isActiveTag}
      </TouchableOpacity>
    );
  }

  render() {
    const { groupsList, selectedUserGroup } = this.props;
    if (groupsList.length !== 0 && !this.state.selectedGroup) {
      this.props.getUsersInGroup(groupsList[0].id);
    }

    return (
      <Container>
        <StyledText
          textType="head"
          text="Community"
          fontColor="tidepool"
          style={styles.horizontalSpacing}
        />
        <StyledText
          textType="subHead3"
          text="Find peers who have similar interests to you."
          fontColor="tidepool"
          style={[styles.horizontalSpacing, styles.marginBottom]}
        />

        <FlatList
          style={[{ flexGrow: 0 }, styles.marginBottom, styles.marginHorizontal]}
          horizontal
          data={groupsList}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          extraData={this.state.selectedGroup}
        />

        <ExploreList contacts={selectedUserGroup} />
      </Container>
    );
  }
}

ExploreTabs.propTypes = {
  groupsList: PropTypes.array.isRequired,
  getGroupsList: PropTypes.func.isRequired,
  getUsersInGroup: PropTypes.func.isRequired,
  selectedUserGroup: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  horizontalSpacing: {
    paddingHorizontal: 20
  },
  marginBottom: {
    marginBottom: 8
  },
  marginHorizontal: {
    marginHorizontal: 20
  }
});

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, props) {
  return {
    groupsList: state.exploreScreen.groupsList,
    selectedUserGroup: state.exploreScreen.selectedUserGroup
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
)(ExploreTabs);
