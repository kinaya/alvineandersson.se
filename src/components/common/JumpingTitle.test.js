import React from 'react';
import JumpingTitle from './JumpingTitle';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils.js';

const defaultProps = {title: 'This is a title'}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<JumpingTitle {...setupProps} />)
}

describe("JumpingTitle", () => {

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'jumping-title-component');
    expect(component.length).toBe(1);
  })

/*  it('renders a h2', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'jumping-title-title');
    expect(component.length).toBe(1);
  })*/

/*  it('renders a number of spans inside the h2', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'jumping-headline');
    const spans = component.find('span');
    expect(spans.length).not.toBeLessThan(1);
  })*/

  /*it('renders the same amount of spans at charachters in the title', () => {

  })*/

  it('does not throw a warning with expected props', () => {
    checkProps(JumpingTitle, defaultProps)
  })

});
