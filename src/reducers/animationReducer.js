import { FILTER_PROJECTS } from '../actions/types'

const initialState = { projects: true }

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
