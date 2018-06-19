import { createAction, handleActions } from 'redux-actions';
import { fromJS, List } from 'immutable';

const initData: {
  listDisplay: Immutable.List
} = {
  listDisplay: List([])
};

/* Action */
export const listDisplayChange: Function = createAction('首页列表展示');

/* reducer */
const reducer: Function = handleActions({
  [listDisplayChange]: ($$state: Immutable.Map, action: Object): Immutable.Map=>{
    return $$state.set('listDisplay', List(action.payload.listDisplay));
  }
}, fromJS(initData));

export default {
  index: reducer
};