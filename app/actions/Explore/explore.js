// Import the sample data
import Data from '../../mocks/explore/users_explore_list';
import groupListData from '../../mocks/explore/groups_list';

export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const ALL_GROUPS = 'ALL_GROUPS';
export const GET_USERS_IN_GROUP = 'GET_USERS_IN_GROUP';

export function getUserExploreList() {
  return dispatch => {
    // Make API Call
    // For this example, I will be using the sample data in the json file
    // delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = Data;
      dispatch({ type: DATA_AVAILABLE, data });
    }, 100);
  };
}

export function getGroupsList() {
  return dispatch => {
    // Make API Call
    // For this example, I will be using the sample data in the json file
    // delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = groupListData;
      dispatch({ type: ALL_GROUPS, data });
    }, 100);
  };
}

export function getUsersInGroup(group_id) {
  return dispatch => {
    // Make API Call
    setTimeout(() => {
      const data = Data.filter(function(user) {
        return user.groups.includes(group_id);
      });
      dispatch({ type: GET_USERS_IN_GROUP, data });
    }, 100);
  };
}
