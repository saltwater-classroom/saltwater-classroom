import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import anikaProfileData from '../../app/mocks/profile/anika_profile.json';
import cassidyProfileData from '../../app/mocks/profile/cassidy_profile.json';
import DoBadgesList from '../Do/DoBadgesList';
import { StyledButton } from './Buttons';
import { baseColors } from './Colors';
import StyledText from './Typography';

export default function ProfileView({ userId }) {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    // Mock API data (TODO: Change these to requests to mock backend?)
    setTimeout(() => {
      if (userId === anikaProfileData.id) {
        setProfileData(anikaProfileData);
      } else if (userId === cassidyProfileData.id) {
        setProfileData(cassidyProfileData);
      } else {
        // TODO Gracefully handle this case...
        throw new Error('Unable to fetch profile data');
      }
    }, 800);
  });

  return !profileData ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator />
    </View>
  ) : (
    <View style={styles.container}>
      <Image source={{ uri: profileData.icon }} style={styles.profileIcon} />
      <StyledText
        textType="head"
        text={profileData.name}
        fontColor="oceanFloor"
        style={styles.spacing}
      />
      {/* TODO Conditionally display profile editing if the passed user ID is the ID of the user */}
      <StyledButton
        text="Edit Profile"
        onPress={() => {}} // TODO add edit functionality
        style={styles.editButton}
        background="pencil"
        fontColor="whiteSands"
      />
      {profileData.bio.split('\n').map((text, i) => (
        <StyledText
          /* eslint-disable-next-line react/no-array-index-key */
          key={i}
          textType="body"
          fontColor="black"
          text={text}
          style={styles.bioParagraph}
        />
      ))}
      <StyledText textType="subHead3" text="Badges" fontColor="black" style={styles.subhead} />
      <DoBadgesList badges={profileData.badges} />
      <StyledText
        textType="subHead3"
        text="My Species Profiles"
        fontColor="black"
        style={styles.subhead}
      />
      {/* TODO Insert species profile component here */}
    </View>
  );
}

ProfileView.propTypes = {
  userId: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseColors.whiteSands
  },
  container: {
    paddingVertical: 60, // TODO ?
    paddingHorizontal: 21,
    backgroundColor: baseColors.whiteSands,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  profileIcon: {
    width: 130,
    height: 130,
    marginBottom: 25
  },
  editButton: {
    flex: 0,
    marginTop: 4,
    marginBottom: 20
  },
  bioParagraph: {
    marginBottom: 20,
    alignSelf: 'stretch'
  },
  subhead: {
    alignSelf: 'flex-start'
  }
});
