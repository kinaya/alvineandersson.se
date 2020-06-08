import React from 'react';
import Service from './Service';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils.js';
import VisibilitySensor from "react-visibility-sensor";

// Define deault props
const defaultProps = {id: 'a', headline: 'A headline', text: 'A text', isVisible: false};

/**
 * Factory function to create a ShallowWrapper for the Service component
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Service {...setupProps} />)
}

describe("Service", () => {

  it('renders without error when `isVisible` is false, and sets `invisible` class', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')({isVisible: false});
    const component = findByTestAttr(insideWrapper, 'component-service');
    expect(component.length).toBe(1);
    expect(insideWrapper.find('.invisible').length).toBe(1)
  })

  it('renders without error when `isVisible` is true, and sets `visible` as class', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')({isVisible: true});
    const component = findByTestAttr(insideWrapper, 'component-service');
    expect(component.length).toBe(1);
    expect(insideWrapper.find('.visible').length).toBe(1)
  })

  it('renders the prop headline as a h4 headline', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')({isVisible: true});
    const component = findByTestAttr(insideWrapper, 'service-headline');
    expect(component.length).toBe(1);
    expect(component.text()).toBe('A headline');
  })

  it('renders the prop text as a p paragraph', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')({isVivislbe: true});
    const component = findByTestAttr(insideWrapper, 'service-paragraph');
    expect(component.length).toBe(1);
    expect(component.text()).toBe('A text');
  })

  it('does not throw a warning with expected props', () => {
    checkProps(Service, defaultProps)
  })

// Not working with useState hook
/*  describe('Local state `visibilitySensorActive`', () => {

    it('it is initially false', () => {
      const wrapper = setup();
      expect(wrapper.state('visibilitySensorActive')).toBe(false)
    })

    it('updates to true when `onChange` method is called with true', () => {
      const wrapper = setup();
      wrapper.prop('onChange')(true) // Run the onChange method
      expect(wrapper.state('visibilitySensorActive')).toBe(true)
    })

  })*/

});
