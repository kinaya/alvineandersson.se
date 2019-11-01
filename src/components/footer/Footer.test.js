import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils.js';

/**
 * Factory function to create a ShallowWrapper for the Footer component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Footer />)
}

describe("Footer", () => {

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'footer-component');
    expect(component.length).toBe(1);
  })

  it('always displays 3 links', () => {
    const wrapper = setup();
    const a = findByTestAttr(wrapper, 'footer-link');
    expect(a.length).toBe(3);
  })

  it('displays the correct link href', () => {
    const wrapper = setup();
    const a = findByTestAttr(wrapper, 'footer-link');
    // Todo: Test if the links are valid
    expect(a.at(0).prop('href')).toEqual('mailto:hej@alvineandersson.se');
    expect(a.at(1).prop('href')).toEqual('https://github.com/kinaya');
    expect(a.at(2).prop('href')).toEqual('https://tamkin.se');
  })

});
