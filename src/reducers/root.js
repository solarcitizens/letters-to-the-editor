// @flow
import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';

const initialState = Immutable({});
const exampleReducer = (state = initialState, action) => {
  switch (action) {
  default:
    return state;
  }
};

export default combineReducers({ exampleReducer });
