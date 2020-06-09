import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Matchmaking, { UnconnectedMatchmaking } from './Matchmaking';
import game from "../../data/game.json";

// Set up the default initial state
const defaultInitialState = {
  game: {
    active: false,
    match: null,
    items: game
  }
}

/**
 * Factory function to create a ShallowWrapper for the Matchmaking component
 * Using dive() to get from the higher-order component to the component
 * that has the values we need to test.
 * @param {object} initialState - Component initial state specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  // todo: why the extra diev()?
  const wrapper = shallow(<Matchmaking store={store} />).dive().dive()
  return wrapper;
}

/**
 * Factory function to create a ShallowWrapper for the Matchmaking component
 * @param {object} initialState - Component initial state specific to this setup
 * @returns {ShallowWrapper}
 */
const setupWithoutDive = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Matchmaking store={store} />)
  return wrapper;
}

describe('Matchmaking', () => {

  it('renders component without error', () => {
    const wrapper = setup(defaultInitialState)
    const component = findByTestAttr(wrapper, 'matchmaking-component')
    expect(component.length).toBe(1)
  })

  it('renders a game container', () => {
    const wrapper = setup(defaultInitialState)
    const component = wrapper.find('.game')
    expect(component.length).not.toBeLessThan(1)
  })

  it('game-button is visible-true and game-items is visible-false if `active` is false', () => {
    const wrapper = setup(defaultInitialState)
    const game_button = wrapper.find('.game-button.visible-true')
    expect(game_button.length).toEqual(1)
    const game_items = wrapper.find('.game-items.visible-false')
    expect(game_items.length).toBe(1)
  })

  it('game-button is visible-false and game-items is visible-true `active` is true', () => {
    const state = {
      game: {
        active: true,
        match: null,
        items: game
      }
    }
    const wrapper = setup(state)
    const component = wrapper.find('.game-button.visible-false')
    expect(component.length).toBe(1)
  })

  // Testing redux props, using prop()
  describe('Matchmaking redux props', () => {

    test('has game as prop', () => {
      // todo
    })

    test('`chooseItem` action creator is a function prop', () => {
      const wrapper = setupWithoutDive(defaultInitialState).dive();
      const chooseItemProps = wrapper.prop('chooseItem');
      expect(chooseItemProps).toBeInstanceOf(Function)
    })

    test('`startGame` action creator is a function prop', () => {
      const wrapper = setupWithoutDive(defaultInitialState).dive();
      const startGameProps = wrapper.prop('startGame');
      expect(startGameProps).toBeInstanceOf(Function)
    })

  })

  // Testing action creator calls, using the unconnected component and a mock action function
  describe('`chooseItem` action creator', () => {
    let chooseItemMock;
    let startGameMock;
    let wrapper;
    let alternative;

    beforeEach(() => {
      chooseItemsMock = jest.fn();
      startGameMock = jest.fn();
      const props = {
        game: {
          active: true,
          match: null,
          items: game
        },
        chooseItems: chooseItemsMock,
        startGame: startGameMock
      }

      wrapper = shallow(<UnconnectedMatchmaking {...props} />)

      // Find the first alternative and simulate a click on it
      // The dom being clicked is in the child. But this does not work
      wrapper.find('SelectItem').first().props().chooseItem.simulate(click);
    })

    /*test('`chooseItem` runs when an alternative is clicked', () => {
      const chooseItemCallCount = chooseItemMock.mock.calls.length;
      expect(chooseItemCallCount).toBe(1);
    })

    test('`chooseItem` runs with correct arguments', () => {
      const chooseItemCallArg = chooseItemMock.mock.calls[0][0];
      expect(chooseItemCallArg).toBe(0,0,null);
    })*/

  })

})
