import { storeFactory } from '../test/testUtils';
import { filterProjects } from './actions';
import { projects } from './data/projects';

describe('filterProject action dispatcher', () => {

  it('Updates state correctly when the first item is selected', () => {
    // What is the correct way?
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
