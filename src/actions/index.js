import { MATCHMAKING, FILTER_PROJECTS } from '../constants'

export function matchMaking(clickedItem, clickedAlternative, itemToShow, alignment) {
  return function(dispatch, getState) {
    dispatch({
      type: MATCHMAKING,
      clickedItem: clickedItem,
      clickedAlternative: clickedAlternative,
      itemToShow: itemToShow,
      alignment: alignment
    })
  }
}

export function filterProjects(filterItem) {
  return function (dispatch, getState) {
    const currentFilter = getState().projects.currentFilter;
    let filterArray = []
    if(currentFilter.includes(filterItem)) {
      filterArray = currentFilter.filter(item => item !== filterItem)
    } else {
      filterArray = [...currentFilter, filterItem]
    }

    dispatch({
      type: FILTER_PROJECTS,
      currentFilter: filterArray
    })
  }
}
