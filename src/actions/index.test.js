import { storeFactory } from '../../test/testUtils';
import { filterProjects, chooseItem, startGame } from './';
import projects from '../data/projects';
import game from "../data/game.json";

// Integration tests for Redux

// chooseItem
describe('chooseItem action dispatcher', () => {

  test('updates state correctly when match is null', () => {

    // Define the initial state and factor the store
    const initialState = {
      game: {
        active: true,
        match: null,
        items: game
      }
    }
    const store = storeFactory(initialState)

    // Dispatch the action
    store.dispatch(chooseItem(0, 0, null));

    // Get the new state
    const newState = store.getState().game

    // Define expected state and assert a few test
    expect(newState.items[0].alternatives[0].visible).toEqual(true);
    expect(newState.items[1].visible).toEqual(true);

  });

  test('updates state correctly when match is not null', () => {

    // Define the initial state and factor the store
    const initialState = {
      game: {
        active: true,
        match: null,
        items: game
      }
    }
    const store = storeFactory(initialState)

    // Dispatch the action
    store.dispatch(chooseItem(0, 1, false));

    // Get the new state
    const newState = store.getState().game

    // Define expected state and assert a few test
    expect(newState.items[0].alternatives[1].visible).toEqual(true);
    expect(newState.match).toEqual(false);


  });
})


// startGame
describe('startGame action dispatcher', () => {

  it('Updates state correctly when run first time', () => {
    const initialState = {
      game: {
        active: false,
        match: null,
        items: []
      }
    }
    const store = storeFactory(initialState)
    store.dispatch(startGame())
    const newState = store.getState().game
    const expectedState = {
      active: true,
      match: null,
      items: game
    }
    expect(newState).toEqual(expectedState);
  })


  it('Updates state correctly when runt as restart', () => {

    // Create an state thats changed
    const initialState = {
      game: {
        active: false,
        match: null,
        items: game
      }
    }
    initialState.game.items[2].clickable = false;
    initialState.game.items[2].visible = true;

    const store = storeFactory(initialState)
    store.dispatch(startGame())
    const newState = store.getState().game
    const expectedState = {
      active: true,
      match: null,
      items: game
    }

    expect(newState).toEqual(expectedState)
  });

})

// filterProject
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
