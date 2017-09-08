// @flow
import { combineReducers } from 'redux-immutable';
import homeReducer from '../modules/Home/store/reducer';

/* reducers */
const reducers: Object = {
  ...homeReducer
};

/* 创建reducer */
export function createReducer(asyncReducer: Object): Function{
  return combineReducers({
    ...reducers,
    ...asyncReducer
  });
}