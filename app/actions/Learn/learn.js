/* eslint-disable eqeqeq */
// Import the sample data
import Data from '../../mocks/learn/get_new_content';
import didYouKnowData from '../../mocks/learn/get_did_you_know';
import newsAndEventsData from '../../mocks/learn/get_news_and_events';
import videosData from '../../mocks/learn/get_videos';

import speciesProfilesData from '../../mocks/learn/get_species_profiles';

import badgesData from '../../mocks/do/get_badges_list';
import learnToBadgeData from '../../mocks/learn/get_badge_to_learn_list';

export const GET_NEW_CONTENT = 'GET_NEW_CONTENT';
export const GET_NEWS_AND_EVENTS = 'GET_NEWS_AND_EVENTS';
export const GET_VIDEOS = 'GET_VIDEOS';

export const GET_DID_YOU_KNOW = 'GET_DID_YOU_KNOW';

export const GET_BADGE_FROM_LEARN = 'GET_BADGE_FROM_LEARN';
export const GET_SPECIES_PROFILES = 'GET_SPECIES_PROFILES';
export const GET_SPECIES_PROFILE_FROM_ID = 'GET_SPECIES_PROFILE_FROM_ID';

export function getNewContent() {
  return dispatch => {
    // Make API Call
    // For this example, I will be using the sample data in the json file
    // delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = Data;
      dispatch({ type: GET_NEW_CONTENT, data });
    }, 100);
  };
}

export function getNewsAndEvents() {
  return dispatch => {
    // Make API Call
    // For this example, I will be using the sample data in the json file
    // delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = newsAndEventsData;
      dispatch({ type: GET_NEWS_AND_EVENTS, data });
    }, 100);
  };
}

export function getVideos() {
  return dispatch => {
    // Make API Call
    // For this example, I will be using the sample data in the json file
    // delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = videosData;
      dispatch({ type: GET_VIDEOS, data });
    }, 100);
  };
}

export function getDidYouKnow() {
  return dispatch => {
    // Make API Call
    // For this example, I will be using the sample data in the json file
    // delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = didYouKnowData;
      dispatch({ type: GET_DID_YOU_KNOW, data });
    }, 100);
  };
}

export function getBadgeFromLearn(learn_id) {
  return dispatch => {
    // Make API Call
    setTimeout(() => {
      const { badge_id } = learnToBadgeData.filter(function(item) {
        return item.learn_id == learn_id;
      })[0];
      const data = badgesData.filter(function(badge) {
        return badge.id == badge_id;
      })[0];
      dispatch({ type: GET_BADGE_FROM_LEARN, data });
    }, 100);
  };
}

export function getSpeciesProfileFromId(speciesProfileId) {
  return dispatch => {
    // Make API Call
    // For this example, I will be using the sample data in the json file
    // delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = speciesProfilesData.filter(function(speciesProfile) {
        return speciesProfile.id === speciesProfileId;
      })[0];
      dispatch({ type: GET_SPECIES_PROFILE_FROM_ID, data });
    }, 100);
  };
}

export function getSpeciesProfiles() {
  return dispatch => {
    // Make API Call
    // For this example, I will be using the sample data in the json file
    // delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = speciesProfilesData;
      data.splice(0, 0, { h: 'd' });
      dispatch({ type: GET_SPECIES_PROFILES, data });
    }, 100);
  };
}
