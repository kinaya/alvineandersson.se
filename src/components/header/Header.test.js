import React from 'react'
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr } from '../../../test/testUtils'
import Header from './Header'

// Is this correct way of simulating function props?
const defaultProps = {onClick: jest.fn()}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Header {...setupProps} />)
}

describe('Header', () => {

  it('does not throw a warning with expected props', () => {
    checkProps(Header, defaultProps)
  })

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'header-component');
    expect(component.length).toBe(1);
  })

  it('always renders a logo as a link', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'header-logo');
    expect(component.length).toBe(1);
    // to be of type A
    // to have a href of..
  });

  it('always renders the scrollarrow', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'header-scrollarrow');
    expect(component.length).toBe(1);
    // OnClick works as it should!
  })

  it('OnClick works', () => {
    //const wrapper = setup();
    //const component = findByTestAttr(wrapper, 'header-scrollarrow');

    // Don't simulate clicks. Instead invoke .prop('onClick')() directly
    //component.simulate('click');
    //console.log(component.prop('onClick'))

  })

})
