import {combineReducers, createStore } from 'redux';
import userdataReducer from '../reducers/userdata.reducers';
const configureStore = () => {
  const store = createStore(
    combineReducers({
      userdatas:userdataReducer,
   
    }),
  );
  return store;
};
export default configureStore;
