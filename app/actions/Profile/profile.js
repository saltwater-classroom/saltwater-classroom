// Import the sample data
import Data from '../../mocks/explore/users_explore_list';

export const DATA_AVAILABLE = 'DATA_AVAILABLE';

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
