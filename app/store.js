import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootreducer from './reducers/index';

export default createStore(rootreducer, applyMiddleware(thunk));
