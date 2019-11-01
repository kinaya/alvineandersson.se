import { FILTER_PROJECTS } from '../actions/types'

const initialState = { projects: true }

/**
* @function animationReducer
* @param {array} state - the current state
* @param {object} action - action to be reduced
* @returns {array} - new animation state
*/
const animation = (state = initialState, action) => {

  switch (action.type) {

    case FILTER_PROJECTS:
      return {
        ...state,
        projects: false
      }

    default:
      return state
  }
}

export default animation
