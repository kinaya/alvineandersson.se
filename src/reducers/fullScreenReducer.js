import { SET_WINDOW_SIZE, SET_FULLSCREEN, SET_SECTION_SIZE } from '../actions/types'

const defaultState = {
  active: false,
  windowSize: [0,0],
  sections: {
    services: 0,
    projects: 0,
    skills: 0,
    matchmaking: 0,
    footer: 0
  }
}

/**
 * @function gameReducer
 * @param {array} state - the current state
 * @param {object} action - action to be reduced
 * @returns {array} - new game state
 */
const fullScreenReducer = (state = defaultState, action) => {

  switch (action.type) {

    case SET_WINDOW_SIZE:
      return {
        ...state,
        windowSize: [action.width, action.height]
      }

    case SET_SECTION_SIZE:
      return {
        ...state,
          sections : {
            ...state.sections,
            [action.section] : action.height
          }
      }

    case SET_FULLSCREEN:

      let fullScreen = true;
      for(let section in Object.values(state.sections)) {
        if(Object.values(state.sections)[section] > window.innerHeight) {
          fullScreen = false;
        }
      }

      // Todo: Why doesn't this work?
      // const fullScreen = !Object.values(state.sections).some(item => item > window.innerHeigh);

      return {
        ...state,
        active: fullScreen
      }

    default:
      return state
  }
}

export default fullScreenReducer
