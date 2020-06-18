import { GET_SECTION_HEIGHT, GET_WINDOW_HEIGHT, CALCULATE_FULLSCREEN } from '../actions/types'

const defaultState = {
  active: false,
  windowHeight: false,
  style: {'height': 'auto'},
  sections: {
    services: false,
    projects: false,
    skills: false,
    matchmaking: false,
    footer: false
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

    case GET_SECTION_HEIGHT:
      return {
        ...state,
          sections : {
            ...state.sections,
            [action.sectionName] : action.value
          }
      }

    case GET_WINDOW_HEIGHT:
      return {
        ...state,
        windowHeight: action.height
      }

    case CALCULATE_FULLSCREEN:
      // Check if any sections has fullScreen as 'false'. Negate the return
      const activateFullScreen = !Object.values(state.sections).some(item => item == false);

      let style = {'height': 'auto'}
      if(activateFullScreen) {
        style = {'height': `${action.windowHeight}px`}
      }

      return {
        ...state,
        active: activateFullScreen,
        style: style
      }

    default:
      return state
  }
}

export default fullScreenReducer
