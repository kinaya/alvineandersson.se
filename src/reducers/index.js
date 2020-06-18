import { combineReducers } from 'redux';
import projects from './projectsReducer';
import game from './gameReducer';
import animation from './animationReducer';
import fullScreen from './fullScreenReducer'

export default combineReducers({
  projects,
  game,
  animation,
  fullScreen
});
