import { RESET_GAME, MATCHMAKING } from '../actions/types'
import matchitemsList from "../data/matchitems.json";

const initialState = { matchitems: matchitemsList }

const matchReducer = (state = initialState, action) => {

  switch (action.type) {

    case MATCHMAKING:
      return {
        ...state,
        matchitems: action.matchitems
      }

    case RESET_GAME:
      return {
        ...state,
        matchitems: action.matchitems
      }

    default:
      return state
  }
}

export default matchReducer
