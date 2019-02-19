import React from 'react';
import Service from './Service';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils.js';

const defaultProps = {id: 'a', headline: 'b', text: 'c', isVisible: false}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Service {...setupProps} />)
}

describe("Service", () => {

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-service');
    expect(component.length).toBe(1);
  })

  it('renders the prop id as the className of the div', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-service');
    // Todo: change this to get the content of the prop!
    expect(component.hasClass('a')).toEqual(true);
  })

  it('renders the prop headline as a h4 headline', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'service-headline');
    expect(component.length).toBe(1);
    // Todo: change this to the content of the prop!
    // This does not work: expect(wrapper.prop('headline')).toEqual('A test service');
    expect(component.text()).toBe('b');
  })

  it('renders the prop text as a p paragraph', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'service-paragraph');
    expect(component.length).toBe(1);
    // Todo: change this to the content of the prop!
    expect(component.text()).toBe('c');
  })

  it('does not throw a warning with expected props', () => {
    checkProps(Service, defaultProps)
  })

});
