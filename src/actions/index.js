import { MATCHMAKING, FILTER_PROJECTS, NAVIGATE, LOCATION_CHANGE } from '../constants'

export function locationChange(key) {
  return function(dispatch) {
    dispatch({
      type: LOCATION_CHANGE,
      key: key
    })
  }
}

export function navigate(direction) {
//  console.log('Is this run?');
  // If scrolling on the project page navigated to, the scroll will be 0 on start page
  // If not, it will be what it was....
  console.log('Test');
  console.log(direction);
  setTimeout(function(){ window.scrollTo(0,0) }, 500);

  return function(dispatch) {
    setTimeout(function(){
      dispatch({
        type: NAVIGATE,
        direction: 'left',
        animation: 'dont-animate'
      })
    }, 1200);
    //window.scrollTo(0,0);
    dispatch({
      type: NAVIGATE,
      direction: direction,
      animation: 'animate'
    })
  }
}

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
