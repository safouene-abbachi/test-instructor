import { combineReducers } from 'redux';
import user from './user';
import gallery from './gallery';

export default combineReducers({
  gallery,
  user
});
