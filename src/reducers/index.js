import { combineReducers } from 'redux';
import projects from './projects';
import match from './match';
import navigation from './navigation';

export default combineReducers({
  projects,
  match,
  navigation
});
