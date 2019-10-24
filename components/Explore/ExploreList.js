import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert, Image } from 'react-native';
import { Button } from 'native-base';
import Constants from 'expo-constants';

function Item({ name, bio }) {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: 40, height: 40 }}
      />
      <View style={styles.nameAndBio}>
        <Text style={styles.title}>{name}</Text>
        <Text numberOfLines={2}>{bio}</Text>
      </View>
      <Button style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
        <Text>Send Mail</Text>
      </Button>
    </View>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

export default function ExploreList(props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.contacts}
        renderItem={({ item }) => <Item name={item.name} bio={item.bio} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
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
    marginTop: Constants.statusBarHeight
  },
  item: {
    borderColor: '#f9c2ff',
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
  title: {
    fontSize: 24
  },
  button: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center'
  },
  profile: {
    width: 40,
    height: 40,
    flex: 1
  }
});
