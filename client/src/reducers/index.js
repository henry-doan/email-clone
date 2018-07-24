import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import email from './email';

const rootReducer = combineReducers({
  user,
  email, 
  flash
});

export default rootReducer;
