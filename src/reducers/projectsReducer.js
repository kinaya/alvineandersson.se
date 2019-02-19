import { FILTER_PROJECTS } from '../actions/types'
import projects from "../data/projects.json";

const initialState = {
  currentFilter: [],
  projects: projects
}

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
