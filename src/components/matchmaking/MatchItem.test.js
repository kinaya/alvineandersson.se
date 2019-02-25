import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import MatchItem from './MatchItem';
import matchItems from '../../data/matchitems.json';

// Declare the defaultProps, using the accual matchItems and a mock function
const resetGameMock = jest.fn();
const defaultProps = {
  item: matchItems[0],
  resetGame: resetGameMock
}

// Setup function to shallow render a component, using the defaultProps or custom props
const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<MatchItem {...setupProps} />)
}

describe('MatchItem', () => {

  // Check so the props are correct, using the function checkProps()
  it('does not throw a warning with expected props', () => {
    checkProps(MatchItem, defaultProps)
  })

  // Check so the shallow rendered component contains one element with correct data-test attribute
  it('renders component without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'match-item-component')
    expect(component.length).toBe(1)
  })

  // Check so the shallow rendered component contains two textButtons
  it('renders a result div with headline and text', () => {
    const wrapper = setup()
    const resultDiv = wrapper.find('.result');
    const headlineDiv = wrapper.find('.result');
    const textDiv = wrapper.find('.result');
    expect(resultDiv.length).toBe(1)
    expect(headlineDiv.length).toBe(1)
    expect(textDiv.length).toBe(1)
  })

  // Simulate a click on the resetGame button and check so it is called correctly
  it('`resetGame` runs with correct arguments when the button is clicked', () => {
    const wrapper = setup()
    const resetGameButton = wrapper.find('.redo');
    resetGameButton.simulate('click');

    // Check so the function was called once
    const resetGameCallCount = resetGameMock.mock.calls.length;
    expect(resetGameCallCount).toBe(1);

    // Set up the expected args, taken from the default props, and check so they are the once the function uses
    expect(resetGameMock.mock.calls[0]).toEqual([]);
  })

})
