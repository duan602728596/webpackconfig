// @flow
import homeReducer from '../modules/Home/store/reducer';
import listReducer from '../modules/List/store/reducer';

/* reducers */
const reducers: Object = {
  ...homeReducer,     // home
  ...listReducer      // list
};

export default reducers;