import { MATCHMAKING, FILTER_PROJECTS, NAVIGATE } from '../constants'

export function navigate(direction) {
  return function(dispatch) {
    setTimeout(function(){ window.scrollTo(0,0) }, 500);
    //window.scrollTo(0,0);
    dispatch({
      type: NAVIGATE,
      direction: direction
    })
  }
}

export function matchMaking(clickedItem, clickedAlternative, itemToShow, arrowAlignment) {
  return function(dispatch, getState) {
    dispatch({
      type: MATCHMAKING,
      clickedItem: clickedItem,
      clickedAlternative: clickedAlternative,
      itemToShow: itemToShow,
      arrowAlignment: arrowAlignment
    })
  }
}

export function filterProjects(filterItem) {
  return function (dispatch, getState) {
    const currentFilter = getState().projects.currentFilter;
    let filterArray = []
    if(currentFilter.includes(filterItem)) {
      // Remove currentItem from filterArray
      filterArray = currentFilter.filter(item => item !== filterItem)
    } else {
      // Add currentItem to filterArray
      filterArray = [...currentFilter, filterItem]
    }

    dispatch({
      type: FILTER_PROJECTS,
      currentFilter: filterArray
    })
  }
}
