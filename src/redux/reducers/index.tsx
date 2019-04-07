import {combineReducers} from 'redux';
import home from './home';
import topic from './topic';
import user from './user';

const rootReducer = combineReducers({
  home,
  topic,
  user
});

export default rootReducer;