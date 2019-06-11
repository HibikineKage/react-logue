import { Reducer } from 'redux';
import { SET_MAP } from '../actionTypes';
import { Actions } from '../actions/map';

const reducer: Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case SET_MAP:
      return { ...state, current: action.payload.data };
    default:
      return state || {};
  }
};
type State = {};
export default reducer;
