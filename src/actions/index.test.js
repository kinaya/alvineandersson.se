import { storeFactory } from '../../test/testUtils';
import { filterProjects, matchMaking, resetGame } from './';
import projects from '../data/projects';
import matchitems from "../data/matchitems";

describe('`matchMaking` action dispatcher', () => {

  it('Updates state correctly when a textButton is selected', () => {
    const initialState = {
      match: {
        matchitems: matchitems
      }
    }
    const store = storeFactory(initialState)
    store.dispatch(matchMaking(1,1.1,2))
    const newState = store.getState().match
    expect(newState.matchitems[0].clickable).toBe(false)
    expect(newState.matchitems[0].alternatives[0].visible).toBe(true)
    expect(newState.matchitems[0].alternatives[1].visible).toBe(false)
    expect(newState.matchitems[1].visible).toBe(true)
  });

})

describe('`resetGame` action dispatcher', () => {

  it('Resets the match state when selected', () => {

    let matchitemsCopy = [...matchitems];
    matchitemsCopy[0].visible = false

    const initialState = {
      match: {
        matchitems: matchitemsCopy
      }
    }

    const store = storeFactory(initialState)
    const oldState = store.getState().match

    store.dispatch(resetGame())
    const newState = store.getState().match

    expect(newState.matchitems[0].visible).toBe(true)
    expect(oldState).not.toBe(newState)
  })

})

describe('filterProject action dispatcher', () => {

  it('Updates state correctly when the first item is selected', () => {
    const initialState = {
      projects: {
        currentFilter: []
      }
    }
    const store = storeFactory(initialState)
    store.dispatch(filterProjects('drupal'))
    const newState = store.getState().projects
    const expectedState = {
      currentFilter: ['drupal']
    }
    expect(newState).toEqual(expectedState)
  });

  it('Updates state correctly when another item is selected', () => {
    const initialState = {
      projects: {
        currentFilter: ['drupal']
      }
    }
    const store = storeFactory(initialState)
    store.dispatch(filterProjects('wordpress'))
    const newState = store.getState().projects
    const expectedState = {
      currentFilter: ['drupal','wordpress']
    }
    expect(newState).toEqual(expectedState)
  });

  it('Updates state correctly when an item is unselected', () => {
    const initialState = {
      projects: {
        currentFilter: ['nodejs','drupal','wordpress']
      }
    }
    const store = storeFactory(initialState)
    store.dispatch(filterProjects('drupal'))
    const newState = store.getState().projects
    const expectedState = {
      currentFilter: ['nodejs','wordpress']
    }
    expect(newState).toEqual(expectedState)
  });

  it('Updates state correctly when all items are unselected', () => {
    const initialState = {
      projects: {
        currentFilter: ['drupal']
      }
    }
    const store = storeFactory(initialState)
    store.dispatch(filterProjects('drupal'))
    const newState = store.getState().projects
    const expectedState = {
      currentFilter: []
    }
    expect(newState).toEqual(expectedState)
  });

})
