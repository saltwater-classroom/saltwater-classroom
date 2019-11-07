// Import the sample data
import Data from '../../mocks/learn/get_new_content';
import didYouKnowData from '../../mocks/learn/get_did_you_know';
import newsAndEventsData from '../../mocks/learn/get_news_and_events';
import videosData from '../../mocks/learn/get_videos';

export const GET_NEW_CONTENT = 'GET_NEW_CONTENT';
export const GET_NEWS_AND_EVENTS = 'GET_NEWS_AND_EVENTS';
export const GET_VIDEOS = 'GET_VIDEOS';

export const GET_DID_YOU_KNOW = 'GET_DID_YOU_KNOW';

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
