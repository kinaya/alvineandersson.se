import React from 'react';
import Services from './Services';
import Service from './Service';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils.js';

/**
 * Factory function to create a ShallowWrapper for the Services component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Services />)
}

describe("Services", () => {

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'services-component');
    expect(component.length).toBe(1);
  })

  it('renders three services components', () => {
    const wrapper = setup();
    const component = wrapper.find('Service');
    expect(component.length).toBe(3);
  });

  it('it passes a headline and text prop of type string to each Service component', () => {
    const wrapper = setup();
    wrapper.find('Service').map(service => {
      expect(typeof service.props().text).toBe('string')
      expect(typeof service.props().headline).toBe('string')
    })
  })

});
