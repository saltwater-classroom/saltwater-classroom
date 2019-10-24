import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../app/actions';

import ExploreTabs from '../../components/Explore/ExploreTabs';

// <Button
//   title="Go to Details Page!"
//   onPress={() => this.props.navigation.navigate('Links')}
// />
class ExploreScreen extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>Explore Screen</Text>
          <Text>{this.props.data.message}</Text>
        </View>
        <ExploreTabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

ExploreScreen.propTypes = {
  getData: PropTypes.func.isRequired,
  data: PropTypes.any.isRequired
};

ExploreScreen.navigationOptions = {
  header: null
};

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, props) {
  return {
    loading: state.dataReducer.loading,
    data: state.dataReducer.data
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
)(ExploreScreen);
