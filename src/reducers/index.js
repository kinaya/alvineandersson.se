import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import gameReducer from './gameReducer';
import animationReducer from './animationReducer';

export default combineReducers({
  projects: projectsReducer,
  game: gameReducer,
  animation: animationReducer
});
