import { FILTER_PROJECTS } from '../actions/types'
import projects from "../data/projects.json";

const initialState = {
  currentFilter: [],
  projects: projects
}

/**
 * @function projectsReducer
 * @param {array} state - the current state
 * @param {object} action - action to be reduced
 * @returns {array} - new projects state
 */
const projectsReducer = (state = initialState, action) => {

  switch (action.type) {

    case FILTER_PROJECTS:
      return {
        ...state,
        currentFilter: action.currentFilter
      }

    default:
      return state
  }
}

export default projectsReducer
