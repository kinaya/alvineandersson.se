import React from 'react'
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr } from '../../../test/testUtils'
import Header from './Header'


const onClickMock = jest.fn();
const defaultProps = {
  onClick: onClickMock
}

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

  it('always renders the scrollarrow', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'header-scrollarrow');
    expect(component.length).toBe(1);
  })

  it('`onClick` gets called when clicking the scrollArrow', () => {
    const wrapper = setup()
    const scrollArrowButton = findByTestAttr(wrapper, 'header-scrollarrow');
    scrollArrowButton.simulate('click');
    expect(onClickMock.mock.calls.length).toBe(1);
  })

})
