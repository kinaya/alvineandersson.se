import { combineReducers } from 'redux';
import projects from './projects';
import match from './match';

export default combineReducers({
  projects,
  match,
});
