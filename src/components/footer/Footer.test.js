import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils.js';

const setup = () => {
  return shallow(<Footer />)
}

describe("Footer", () => {

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'footer-component');
    expect(component.length).toBe(1);
  })

  it('always renders a headline', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'footer-headline');
    expect(component.length).not.toBeLessThan(1);
  });

  it('alwayes displayes 3 links', () => {
    const wrapper = setup();
    const a = findByTestAttr(wrapper, 'footer-link');
    expect(a.length).toBe(3);
  })

  it('displayes the correct link href', () => {
    const wrapper = setup();
    const a = findByTestAttr(wrapper, 'footer-link');
    // Todo: Does this always work? Can I test if the links are valid?
    expect(a.at(0).prop('href')).toEqual('mailto:hej@alvineandersson.se');
    expect(a.at(1).prop('href')).toEqual('https://github.com/kinaya');
    expect(a.at(2).prop('href')).toEqual('https://tamkin.se');
  })

});
