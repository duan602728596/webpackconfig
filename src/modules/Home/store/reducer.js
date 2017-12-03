import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initData: {
  listDisplay: Object[]
} = {
  listDisplay: []
};

/* Action */
export const listDisplayChange: Function = createAction('首页列表展示');

/* reducer */
const reducer: Function = handleActions({
  [listDisplayChange]: ($$state: Immutable.Map, action: Object): Immutable.Map=>{
    return $$state.set('listDisplay', action.payload.listDisplay);
  }
}, fromJS(initData));

export default {
  home: reducer
};