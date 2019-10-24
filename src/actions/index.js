import { CHOOSE_ITEM, FILTER_PROJECTS, FINISH_GAME, STOP_GAME, START_GAME } from './types'
import { addOrRemoveFilter } from '../helpers'
import game from "../data/game.json";


// Choose item
export const chooseItem = (i, match) => (dispatch, getState) => {

  let currentItems = getState().game.items;

  // Set the clicked item as clickable false and mark selected alternative
  let lastItem = currentItems[currentItems.length -1];
  lastItem.clickable = false;
  lastItem.alternatives[0].visible = false;
  lastItem.alternatives[1].visible = false;
  lastItem.alternatives[i].visible = true;

  if(match == null) {

    currentItems.push(game[currentItems.length]);

    dispatch({
      type: CHOOSE_ITEM,
      items: currentItems
    })

  }

  if(match != null) {

    dispatch({
      type: FINISH_GAME,
      match: match
    })

  }

}

// Choose item
/*export function chooseItem(clickedItem, clickedAlternative, itemToShow) {
  return async (dispatch, getState) => {

    // Copy the matchItems into a new array so we can change them
    let currentMatchItems = getState().game.items;
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
      type: CHOOSE_ITEM,
      items: nextMatchItems
    })

  }
}*/

// Start game
export const startGame = () => dispatch => {

  let items = []

  // Make a deep copy
  //let gameItems = [...game] // Shallow copy

  let gameItems = JSON.parse(JSON.stringify(game)); // deep copy
  items.push(gameItems[0])

  dispatch({
    type: START_GAME,
    items: items,
    match: null
  })
}

// This is an async action, not using a plain object
// Why did this have return async (distp.... ????
export function filterProjects(filterItem) {
  return (dispatch, getState) => {

    let filterArray = [];

    if(filterItem) {
      const currentFilter = getState().projects.currentFilter;
      filterArray = addOrRemoveFilter(currentFilter, filterItem);
    }

    dispatch({
      type: FILTER_PROJECTS,
      currentFilter: filterArray
    })

  }
}
