import { NAVIGATE } from '../constants'

const navigation = (state = [], action) => {

  switch (action.type) {

    case NAVIGATE:
      return {
        ...state,
        direction: action.direction
      }

    default:
      return state
  }
}

export default navigation
