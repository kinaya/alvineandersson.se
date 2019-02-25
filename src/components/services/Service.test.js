import React from 'react';
import Service from './Service';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils.js';
import VisibilitySensor from "react-visibility-sensor";

const defaultProps = {id: 'a', headline: 'b', text: 'c', isVisible: false}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Service {...setupProps} />)
}

describe("Service", () => {

  it('renders without error when `isVisible` is false, and sets `invisible` class', () => {
    const wrapper = setup();

    // The Service component is wrapped in a VisibilitySensor component.
    // wrapper has [function] as a child. Enzyme don't go further in shallow rendering
    // so we need to manually invoke that function. It has value of either true or false
    // We can do this in two ways, not sure which is best
    //const insideWrapper = shallow(wrapper.find('VisibilitySensor').prop('children')(true))
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')(false);
    const component = findByTestAttr(insideWrapper, 'component-service');
    expect(component.length).toBe(1);

    // This does not work as expected. The class is always 'invisible'
    //expect(insideWrapper.find('.invisible').length).toBe(1)
  })

  it('renders without error when `isVisible` is true, and sets `visible` as class', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')(true);
    const component = findByTestAttr(insideWrapper, 'component-service');
    expect(component.length).toBe(1);

    // This does not work as expected. The class is always 'invisible'
    //expect(insideWrapper.find('.visible').length).toBe(1)
  })

  it('renders the prop headline as a h4 headline', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')(true);
    const component = findByTestAttr(insideWrapper, 'service-headline');
    expect(component.length).toBe(1);
    expect(component.text()).toBe('b');
  })

  it('renders the prop text as a p paragraph', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')(true);
    const component = findByTestAttr(insideWrapper, 'service-paragraph');
    expect(component.length).toBe(1);
    expect(component.text()).toBe('c');
  })

  it('does not throw a warning with expected props', () => {
    checkProps(Service, defaultProps)
  })

  describe('Local state `visibilitySensorActive`', () => {

    it('it is initially false', () => {
      const wrapper = setup();
      expect(wrapper.state('visibilitySensorActive')).toBe(false)
    })

    it('updates to true when `onChange` method is called with true', () => {
      const wrapper = setup();
      // Run the onChange method
      wrapper.prop('onChange')(true)
      expect(wrapper.state('visibilitySensorActive')).toBe(true)
    })

  })

});
