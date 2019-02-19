import React from 'react';
import Services from './Services';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils.js';

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
    const component = findByTestAttr(wrapper, 'services-service');
    expect(component.length).toBe(3);
  });

  //it('passes all the props to the child components', () => {  })

});
