import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from '../actions/Explore/explore'; // Import the actions types constant we defined in our actions
import { MISSION_LIST, BADGES_LIST, GET_BADGE_FROM_MISSION } from '../actions/Do/do';

const dataState = { data: [], loading: true };
const initialDoScreenState = {
  missions: [],
  badges: [],
  updatedBadge: undefined,
  loading: true
};

const exploreScreenReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return { ...state, data: action.data, loading: false };
    default:
      return state;
  }
};

const doScreenReducer = (state = initialDoScreenState, action) => {
  switch (action.type) {
    case MISSION_LIST:
      return { ...state, missions: action.data, loading: false };
    case BADGES_LIST:
      return { ...state, badges: action.data, loading: false };
    case GET_BADGE_FROM_MISSION:
      return { ...state, updatedBadge: action.data, loading: false };

    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  exploreScreen: exploreScreenReducer,
  doScreen: doScreenReducer
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
