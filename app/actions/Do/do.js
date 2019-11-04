/* eslint-disable eqeqeq */
// Import the sample data
import Data from '../../mocks/do/get_mission_list';
import badgesData from '../../mocks/do/get_badges_list';
import missionToBadgeData from '../../mocks/do/get_badge_to_mission_list';

export const MISSION_LIST = 'MISSION_LIST';
export const BADGES_LIST = 'BADGES_LIST';
export const GET_BADGE_FROM_MISSION = 'GET_BADGE_FROM_MISSIONS';

export function getMissionList() {
  return dispatch => {
    // Make API Call
    setTimeout(() => {
      const data = Data;
      dispatch({ type: MISSION_LIST, data });
    }, 100);
  };
}

export function getBadgesList() {
  return dispatch => {
    // Make API Call
    setTimeout(() => {
      const data = badgesData;
      dispatch({ type: BADGES_LIST, data });
    }, 100);
  };
}

export function getBadgeFromMission(mission_id) {
  return dispatch => {
    // Make API Call
    setTimeout(() => {
      const { badge_id } = missionToBadgeData.filter(function(item) {
        return item.mission_id == mission_id;
      })[0];
      const data = badgesData.filter(function(badge) {
        return badge.id == badge_id;
      })[0];
      dispatch({ type: GET_BADGE_FROM_MISSION, data });
    }, 100);
  };
}
