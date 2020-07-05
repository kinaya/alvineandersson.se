import { SET_WINDOW_SIZE, SET_FULLSCREEN } from '../actions/types'

const defaultState = {
  active: false,
  windowSize: [0,0]
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

    case SET_FULLSCREEN:
      return {
        ...state,
        active: action.value
      }

    default:
      return state
  }
}

export default fullScreenReducer
