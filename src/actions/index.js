import { MATCHMAKING, FILTER_PROJECTS, RESET_GAME } from './types'
import { addOrRemoveFilter } from '../helpers'

export function matchMaking(clickedItem, clickedAlternative, itemToShow) {
  return async (dispatch, getState) => {

    // Copy the matchItems into a new array so we can change them
    let currentMatchItems = getState().match.matchitems;
    let nextMatchItems = [...currentMatchItems];

    nextMatchItems.map(item => {
      item.id === clickedItem && (
        item.clickable = false,
        item.alternatives.map(alt => {
          alt.id != clickedAlternative && (alt.visible = false)
        })
      )
      item.id === itemToShow && ( item.visible = true )
    })

    dispatch({
      type: MATCHMAKING,
      matchitems: nextMatchItems
    })

  }
}

export function resetGame() {
  return async (dispatch, getState) => {

    // Copy the matchItems into a new array so we can change them
    let currentMatchItems = getState().match.matchitems;
    let nextMatchItems = [...currentMatchItems];

    nextMatchItems.map(item => {
      item.clickable = true;
      item.visible = false;
      if(item.type != 'match') {
        item.alternatives.map(alt => {
          alt.visible = true;
        })
      }
    })
    nextMatchItems[0].visible = true;

    dispatch({
      type: RESET_GAME,
      matchitems: nextMatchItems
    })

  }
}

// This is an async action, not using a plain object
// Why did this have return async (distp.... ????
export function filterProjects(filterItem) {
  return (dispatch, getState) => {

    const currentFilter = getState().projects.currentFilter;
    const filterArray = addOrRemoveFilter(currentFilter, filterItem);

    dispatch({
      type: FILTER_PROJECTS,
      currentFilter: filterArray
    })

  }
}
