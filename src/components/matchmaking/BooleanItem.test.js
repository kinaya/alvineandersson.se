import React from 'react'
import { shallow } from 'enzyme'
import BooleanItem from './BooleanItem'
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import matchItems from '../../data/matchitems.json';

// Declare the defaultProps, using the accual matchItems and a mock function
const matchMakingMock = jest.fn();
const defaultProps = {
  item: matchItems[0],
  matchMaking: matchMakingMock
}

// Setup function to shallow render a component, using the defaultProps or custom props
const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<BooleanItem {...setupProps} />)
}

describe('BooleanItem', () => {

  // Check so the props are correct, using the function checkProps()
  it('does not throw a warning with expected props', () => {
    checkProps(BooleanItem, defaultProps)
  })

  // Check so the shallow rendered component contains one element with correct data-test attribute
  it('renders component without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'boolean-item-component')
    expect(component.length).toBe(1)
  })

  // Check so the shallow rendered component contains two textButtons
  it('renders two buttons', () => {
    const wrapper = setup()
    const button = wrapper.find('button');
    expect(button.length).toBe(2)
  })

  it('does not run the `matchMaking` function when the item is not clickable', () => {

    // Custom props to set clickable to false
    const change = {clickable: false}
    const props = {
      item: {...matchItems[0], ...change},
      matchMaking: matchMakingMock
    }

    const wrapper = setup(props)
    const button = wrapper.find('button').first();
    button.simulate('click');

    // Check so the function was not called
    const matchMakingCallCount = matchMakingMock.mock.calls.length;
    expect(matchMakingCallCount).toBe(0);

  })

  // Simulate a click on the first textButton and check so it is called correctly
  it('`matchMaking` runs with correct arguments when a button is clicked', () => {
    const wrapper = setup()
    const button = wrapper.find('button').first();
    button.simulate('click');

    // Check so the function was called once
    const matchMakingCallCount = matchMakingMock.mock.calls.length;
    expect(matchMakingCallCount).toBe(1);

    // Set up the expected args, taken from the default props, and check so they are the once the function uses
    const expectedArgs = [
      defaultProps.item.id,
      defaultProps.item.alternatives[0].id,
      defaultProps.item.alternatives[0].link
    ]
    expect(matchMakingMock.mock.calls[0]).toEqual(expectedArgs);
  })


})
