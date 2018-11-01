import { MATCHMAKING } from '../constants'

const match = (state = [], action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {

    case MATCHMAKING:

      // Reset
      if(action.clickedItem === null) {
        for(let i = 0; i < newState.matchitems.length; i++) {
          newState.matchitems[i].clickable = true;
          newState.matchitems[i].visible = false;
          if(newState.matchitems[i].type != 'answer') {
            for(let y = 0; y < newState.matchitems[i].alternatives.length; y++) {
              newState.matchitems[i].alternatives[y].active = false;
            }
          }
        }
        newState.matchitems[0].visible = true;
        return newState;
      }

      for(let i = 0; i < newState.matchitems.length; i++) {
        // Mark the selected alternative as active
        if(newState.matchitems[i].id === action.clickedItem) {
          // Mark the clicked item as no clickable
          newState.matchitems[i].clickable = false
          for(let y = 0; y < newState.matchitems[i].alternatives.length; y++) {
            if(newState.matchitems[i].alternatives[y].id === action.clickedAlternative) {
              newState.matchitems[i].alternatives[y].active = true
            }
          }
        }
        // Mark the item to show as visible
        // Set its arrowAlignment
        if(newState.matchitems[i].id === action.itemToShow) {
          newState.matchitems[i].visible = true
          newState.matchitems[i].arrowAlignment = action.arrowAlignment
        }
      }

      return newState

    default:
      return state
  }
}

export default match
