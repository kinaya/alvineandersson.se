import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Matchmaking, { UnconnectedMatchmaking } from './Matchmaking';
import SelectItem from './SelectItem';
import BooleanItem from './BooleanItem';
import MatchItem from './MatchItem';
import matchitems from "../../data/matchitems.json";

const defaultInitialState = {
  match: {
    matchitems: matchitems
  }
}

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Matchmaking store={store} />).dive()
  return wrapper;
}

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

  it('renders a series of items', () => {
    const wrapper = setup(defaultInitialState)
    const component = findByTestAttr(wrapper, 'matchmaking-item')
    expect(component.length).not.toBeLessThan(1)
  })

  it('renders the same number of items as items', () => {
    const wrapper = setup(defaultInitialState)
    const component = findByTestAttr(wrapper, 'matchmaking-item')
    expect(component.length).toBe(matchitems.length)
  })

  it('renders SelectItem, BooleanItem and MatchItem components', () => {
    const wrapper = setup(defaultInitialState)
    const SelectItem = wrapper.find('SelectItem')
    expect(SelectItem.length).not.toBeLessThan(1)
    const BooleanItem = wrapper.find('BooleanItem')
    expect(BooleanItem.length).not.toBeLessThan(1)
    const MatchItem = wrapper.find('MatchItem')
    expect(MatchItem.length).toBe(2)
  })

})

describe('Has correct props from Redux', () => {
  test('has matchitems piece of state as prop', () => {
    const state = {
      match: {
        matchitems: matchitems
      }
    }
    const wrapper = setupWithoutDive(state)
    const matchitemsProps = wrapper.prop('matchitems');
    expect(matchitemsProps).toBe(state.match.matchitems);
  })
  test('`matchMaking` action trigger is a function prop', () => {
    const wrapper = setupWithoutDive(defaultInitialState)
    const matchMakingProps = wrapper.prop('matchMaking');
    expect(matchMakingProps).toBeInstanceOf(Function)
  })
  it('`resetGame` action trigger is a function prop', () => {
    const wrapper = setupWithoutDive(defaultInitialState)
    const resetGameProps = wrapper.prop('resetGame');
    expect(resetGameProps).toBeInstanceOf(Function)
  })
})

describe('`matchMaking` and `resetGame` action trigger', () => {
  let matchMakingMock;
  let resetGameMock;
  let wrapper;
  let tagButton;

  beforeEach(() => {
    matchMakingMock = jest.fn();
    resetGameMock = jest.fn();
    const props = {
      matchitems: matchitems,
      matchMaking: matchMakingMock,
      resetGame: resetGameMock
    }

    wrapper = shallow(<UnconnectedMatchmaking {...props} />)

    // Run the functions
    wrapper.find('SelectItem').first().prop('matchMaking')('a','b','c');
    wrapper.find('MatchItem').first().prop('resetGame')();
  })

  // What am i testing here?
  test('`matchMaking` runs', () => {
    expect(matchMakingMock.mock.calls.length).toBe(1);
  })

  test('`matchMaking` runs with correct arguments', () => {
    expect(matchMakingMock.mock.calls[0][0]).toBe('a', 'b', 'c');
  })

  it('`resetGame` runs', () => {
    expect(resetGameMock.mock.calls.length).toBe(1);
  })

})
