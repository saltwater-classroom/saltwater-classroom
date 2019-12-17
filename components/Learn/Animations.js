import * as React from 'react';
import {
  Animated,
  Dimensions,
  NativeModules,
  LayoutAnimation,
  Easing,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import { Icon } from 'native-base';

import SearchLearnModalView from './SearchLearnModalView';

import LearnSearchResults from './LearnSearchResults';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const { UIManager } = NativeModules;

// eslint-disable-next-line no-unused-expressions
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Animations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftSide: true
    };
    const xValue = this.state.isLeftSide ? 0 : -screenWidth;

    this.ball = new Animated.ValueXY({ x: xValue, y: 30 });
  }

  toggle = () => {
    // Animate the update
    LayoutAnimation.easeInEaseOut();
    this.props.toggleModal();
  };

  moveScreen = () => {
    const xValue = this.state.isLeftSide ? -screenWidth : 0;
    Animated.timing(this.ball, {
      toValue: { x: xValue, y: 30 },
      duration: 300,
      easing: Easing.linear
    }).start(this.finishedAnimation);
  };

  finishedAnimation = () => {
    this.setState(prevState => ({
      isLeftSide: !prevState.isLeftSide
    }));
  };

  render() {
    const height = this.props.expanded ? screenHeight : 0;
    return (
      <View style={[styles.container, { height }]}>
        <TouchableOpacity onPress={this.toggle}>
          <Animated.View style={[this.ball.getLayout(), { flexDirection: 'row' }]}>
            <View
              style={{
                width: screenWidth
              }}>
              <SearchLearnModalView onItemClick={this.moveScreen} />
            </View>
            <View
              style={{
                width: screenWidth
              }}>
              <Icon type="AntDesign" name="arrowleft" onPress={this.moveScreen} />
              <LearnSearchResults
                content={[
                  {
                    id: '2',
                    type: 'news',
                    title:
                      'Incredibly Rare 1-in-50 Million Orange-and-Black Lobster Found in Maine',
                    url:
                      'https://www.theepochtimes.com/incredibly-rare-1-in-50-million-orange-and-black-lobster-found-in-maine_3103460.html'
                  }
                ]}
                width={screenWidth}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

Animations.defaultProps = {
  expanded: false
};

Animations.propTypes = {
  expanded: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32
  }
});
