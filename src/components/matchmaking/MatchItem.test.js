import React from 'react';
import MatchItem from './MatchItem';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils.js';

// Declare a Mock function
const startGameMock = jest.fn();

// The default props
const defaultProps = {
  match: true,
  startGame: startGameMock
}

/**
 * Factory function to create a ShallowWrapper for the SelectItem component
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<MatchItem {...setupProps} />)
}

describe("MatchItem", () => {

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'match-item-component');
    expect(component.length).toBe(1);
  })

  it('displays the match if the value of `match` is true', () => {
    const wrapper = setup();
    const match = wrapper.find('.match');
    const no_match = wrapper.find('.no-match');
    expect(match.length).toBe(1);
    expect(no_match.length).toBe(0);
  })

  it('displays the no-match if the value of `match` is false', () => {
    const props = {
      match: false,
      startGame: startGameMock
    }
    const wrapper = setup(props)
    const match = wrapper.find('.match');
    const no_match = wrapper.find('.no-match');
    expect(match.length).toBe(0);
    expect(no_match.length).toBe(1);
  })

  it('does not throw a warning with expected props', () => {
    checkProps(MatchItem, defaultProps)
  })

  it('`startGame` runs with correct arguments when an alternative is clicked', () => {
    const wrapper = setup()
    const redo = wrapper.find('.redo');
    redo.simulate('click');

    // Check so the function was called once
    const startGameCallCount = startGameMock.mock.calls.length;
    expect(startGameCallCount).toBe(1);
  })


});
