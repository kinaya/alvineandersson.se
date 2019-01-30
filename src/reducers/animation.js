import { LOCATION_CHANGE, FILTER_PROJECTS } from '../constants'

const animation = (state = [], action) => {

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
