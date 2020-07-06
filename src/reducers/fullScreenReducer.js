import { SET_WINDOW_SIZE } from '../actions/types'

const defaultState = {
  active: true,
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
        windowSize: [action.width, action.height],
        active: action.fullscreen
      }

    default:
      return state
  }
}

export default fullScreenReducer
