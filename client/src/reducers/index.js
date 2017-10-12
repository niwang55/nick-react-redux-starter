import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import listReducer from './listReducer';

const reducer = combineReducers({
  counterReducer,
  listReducer
});

export default reducer;