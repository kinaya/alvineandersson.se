import { combineReducers } from 'redux';
import projects from './projects';
import match from './match';
import navigation from './navigation';
import animation from './animation';

export default combineReducers({
  projects,
  match,
  navigation,
  animation
});
