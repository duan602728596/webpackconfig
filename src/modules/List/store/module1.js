// flow
import { createAction, handleActions } from 'redux-actions';

/* Action */
export const dataList: Function = createAction('数据列表');

/* reducer */
const reducer: Object = handleActions({
  [dataList]: (state: Object, action: Object): Object=>{
    return state.set('dataList', action.payload.dataList);
  }
}, {});

export default reducer;