import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils.js';
import Skills from './Skills'

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
