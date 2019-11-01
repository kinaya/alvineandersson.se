import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils.js';
import Skills from './Skills'

/**
 * Factory function to create a ShallowWrapper for the Skills component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Skills />)
}

describe("Skills", () => {

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'skills-component');
    expect(component.length).toBe(1);
  })

  it('renders one or more skill stacks', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'skills-skill');
    expect(component.length).not.toBeLessThan(1);
  });

});
