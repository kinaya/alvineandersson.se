import React from 'react';
import JumpingTitle from './JumpingTitle';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils.js';
import VisibilitySensor from "react-visibility-sensor";

// Define default props
const defaultProps = {title: 'This is a title'}

/**
 * Factory function to create a ShallowWrapper for the JumpingTitle component
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<JumpingTitle {...setupProps} />)
}

describe("JumpingTitle", () => {

  it('renders without error when `isVisible` is false, and sets `invisible` class', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')({isVisible: false});
    const component = findByTestAttr(insideWrapper, 'jumping-title-component');
    expect(component.length).toBe(1);
    expect(insideWrapper.find('.invisible').length).toBe(1)
  })

  it('renders without error when `isVisible` is true, and sets `visible` as class', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')({isVisible: true});
    const component = findByTestAttr(insideWrapper, 'jumping-title-component');
    expect(component.length).toBe(1);
    expect(insideWrapper.find('.visible').length).toBe(1)
  })

  it('renders the same amunt of spans as characters inside title prop', () => {
      const wrapper = setup()
      const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')({isVisible: true});
      const spans = insideWrapper.find('span');
      expect(spans.length).toBe(defaultProps.title.length);
  })

  it('does not throw a warning with expected props', () => {
    checkProps(JumpingTitle, defaultProps) // Test prop-types for unconnected component
  })

  describe('Local state `visibilitySensorActive`', () => {

    it('is initially false', () => {
      const wrapper = setup();
      expect(wrapper.state('visibilitySensorActive')).toBe(false)
    })

    it('updates to true when `onChange` method is called with true', () => {
      const wrapper = setup();
      wrapper.prop('onChange')(true)
      expect(wrapper.state('visibilitySensorActive')).toBe(true)
    })

  })

});
