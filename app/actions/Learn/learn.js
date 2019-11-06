// Import the sample data
import Data from '../../mocks/learn/get_new_content';

export const GET_NEW_CONTENT = 'GET_NEW_CONTENT';

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
