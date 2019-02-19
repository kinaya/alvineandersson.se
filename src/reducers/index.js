import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import matchReducer from './matchReducer';
import animationReducer from './animationReducer';

export default combineReducers({
  projects: projectsReducer,
  match: matchReducer,
  animation: animationReducer
});
