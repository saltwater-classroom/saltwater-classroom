import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, FlatList } from 'react-native';

import DoBadgeMissionListItem from './DoBadgeMissionListItem';

import BadgeProgress from '../shared_components/BadgeProgress';

import StyledText from '../shared_components/Typography';

export default class DoBadgeModalView extends React.Component {
  onPress = () => {
    this.props.onPressItem(this.props);
  };

  render() {
    const { name, percent, goalMessage, id } = this.props;
    return (
      <View style={styles.item}>
        <StyledText textType="subHead3" text={name} fontColor="tidepool" style={styles.spacing} />
        <BadgeProgress percent={percent} size={200} radius={150} borderWidth={30} id={id} />
        <StyledText
          textType="body"
          text={goalMessage}
          fontColor="coralReef"
          style={styles.spacing}
        />
        <StyledText
          textType="body"
          text="You can earn this badge if you:"
          fontColor="coralReef"
          style={styles.spacing}
        />
        <FlatList
          data={[{ id: '1', name: 'hello' }]}
          horizontal={false}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => {
            return <DoBadgeMissionListItem id={item.id} name="hello" />;
          }}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

DoBadgeModalView.defaultProps = {
  onPressItem: undefined
};

DoBadgeModalView.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  goalMessage: PropTypes.string.isRequired,
  onPressItem: PropTypes.func
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'column',
    flex: 1,
    textAlign: 'center'
  },
  spacing: {
    marginBottom: 29
  }
});
