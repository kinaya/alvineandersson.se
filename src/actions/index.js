import { CHOOSE_ITEM, FILTER_PROJECTS, FINISH_GAME, END_GAME, START_GAME, GET_SECTION_HEIGHT, GET_WINDOW_SIZE, CALCULATE_FULLSCREEN } from './types'
import { addOrRemoveFilter } from '../helpers'
import game from "../data/game.json";

/**
 * Append a new item to the tems array, or display a match/non-match.
 * Runs when the user selects an item.
 *
 * @function chooseItem
 * @param i The alternative that was choosen
 * @param match If a match (true or false) should be shown
 * @returns {object} - Action object with type 'CHOOSE_ITEM' or 'FINISH_GAME'
 */
export const chooseItem = (itemNumber, alternativeNumber, match) => (dispatch, getState) => {

  let currentItems = getState().game.items;

  // Set the clicked item as clickable false, and mark selected alternative
  currentItems[itemNumber].clickable = false;
  currentItems[itemNumber].alternatives[0].visible = false;
  currentItems[itemNumber].alternatives[1].visible = false;
  currentItems[itemNumber].alternatives[alternativeNumber].visible = true;

  // If no match, make the next item visible
  if(match == null) {
    currentItems[itemNumber + 1].visible = true;
    dispatch({
      type: CHOOSE_ITEM,
      items: currentItems
    })
  }

  // If match, display match/non-match
  if(match != null) {
    dispatch({
      type: FINISH_GAME,
      match: match
    })
  }

}

/**
 * Start the game.
 * Runs when the user clicks the start game button
 */
export const startGame = () => dispatch => {

  // Make a deep copy so we don't change the original json data
  let gameItems = JSON.parse(JSON.stringify(game));

  // Add the first item of the game to an items array
  //let items = []
  //items.push(gameItems[0])

  dispatch({
    type: START_GAME,
    items: gameItems,
    match: null
  })
}

/**
* Ends the game
* Runs when the user clicks restart game
*/
export const endGame = () => dispatch => {
  dispatch({
    type: END_GAME
  })
}

/**
 * Filter the visible projects. Runs when the user clicks a filter
 * @param filterItem The clicked item to filter by. If false the display all was clicked
 */
export const filterProjects = (filterItem) => (dispatch, getState) => {

  let filterArray = [];

  // Add or remove a filter item with helper function
  if(filterItem) {
    const currentFilter = getState().projects.currentFilter;
    filterArray = addOrRemoveFilter(currentFilter, filterItem);
  }

  dispatch({
    type: FILTER_PROJECTS,
    currentFilter: filterArray
  })

}

export const getSectionHeight = (sectionName, value) => (dispatch, getState) => {
  dispatch({
    type: GET_SECTION_HEIGHT,
    sectionName: sectionName,
    value: value
  })
  dispatch({
    type: CALCULATE_FULLSCREEN,
    windowHeight: getState().fullScreen.windowSize[1]
  })
}

export const getWindowSize = () => (dispatch, getState) => {
  // Only update if the width has changed, or it will update on iPad scroll
  if(window.innerWidth != getState().fullScreen.windowSize[0]) {
    dispatch({
      type: GET_WINDOW_SIZE,
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
}
