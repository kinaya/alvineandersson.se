import { NAVIGATE, LOCATION_CHANGE } from '../constants'

const navigation = (state = [], action) => {

  switch (action.type) {

    case LOCATION_CHANGE:
      return {
        ...state,
        prevPathKey: action.key
      }

    case NAVIGATE:
      return {
        ...state,
        direction: action.direction,
        animation: action.animation 
      }

    default:
      return state
  }
}

export default navigation
