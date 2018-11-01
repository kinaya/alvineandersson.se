import { FILTER_PROJECTS } from '../constants'

const projects = (state = [], action) => {

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

export default projects
