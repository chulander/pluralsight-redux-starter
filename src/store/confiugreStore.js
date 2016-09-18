/* eslint-disable*/
import { createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
/* eslint-enable*/

import rootReducer from '../reducers';

export default function configureStore(initialState){
  "use strict";
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
