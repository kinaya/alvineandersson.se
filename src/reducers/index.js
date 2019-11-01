import { combineReducers } from 'redux';
import projects from './projectsReducer';
import game from './gameReducer';
import animation from './animationReducer';

export default combineReducers({
  projects,
  game,
  animation
});
