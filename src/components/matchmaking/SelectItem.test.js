import React from 'react';
import SelectItem from './SelectItem';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils.js';
import game from "../../data/game.json";

// Declare a Mock function
const chooseItemMock = jest.fn();

// The default props
const defaultProps = {
  itemNumber: 1,
  item: game[0],
  chooseItem: chooseItemMock
}

/**
 * Factory function to create a ShallowWrapper for the SelectItem component
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<SelectItem {...setupProps} />)
}

describe("SelectItem", () => {

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'select-item-component');
    expect(component.length).toBe(1);
  })

  it('renders two alternatives', () => {
    const wrapper = setup();
    const alternatives = wrapper.find('.text');
    expect(alternatives.length).toBe(2);
  });

  // Map through the textButtons and chech so each contains a span tag
  it('each alternative contains a span', () => {
    const wrapper = setup()
    wrapper.find('.text').map(button => {
      expect(button.find('span').length).toBe(1)
    })
  })

  it('does not throw a warning with expected props', () => {
    checkProps(SelectItem, defaultProps)
  })

  it('does not run the `chooseItem` function when the item is not clickable', () => {

    // Custom props to set clickable to false
    const props = {
      itemNumber: 1,
      item: {...game[0], ...{clickable: false}},
      chooseItem: chooseItemMock
    }

    const wrapper = setup(props)
    const alternative = wrapper.find('.text').first();
    alternative.simulate('click');

    // Check so the function was not called
    const chooseItemCallCount = chooseItemMock.mock.calls.length;
    expect(chooseItemCallCount).toBe(0);

  })

  it('`chooseItem` runs with correct arguments when an alternative is clicked', () => {
    const wrapper = setup()
    const alternative = wrapper.find('.text').first();
    alternative.first().simulate('click');

    // Check so the function was called once
    const chooseItemCallCount = chooseItemMock.mock.calls.length;
    expect(chooseItemCallCount).toBe(1);

    // Set up the expected args, taken from the default props,
    // and check so they are the once the function uses
    const expectedArgs = [1,0,null]
    expect(chooseItemMock.mock.calls[0]).toEqual(expectedArgs);
  })


});
