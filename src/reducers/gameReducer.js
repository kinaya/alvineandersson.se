import { START_GAME, CHOOSE_ITEM, FINISH_GAME } from '../actions/types'

const defaultState = {
  active: false,
  match: null,
  items: []
}

const gameReducer = (state = defaultState, action) => {

  switch (action.type) {

    case START_GAME:
      return {
        ...state,
        active: true,
        items: action.items,
        match: action.match
      }

    case CHOOSE_ITEM:
      return {
        ...state,
        items: action.items
      }

    case FINISH_GAME:
      return {
        ...state,
        match: action.match
      }

    default:
      return state
  }
}

export default gameReducer
