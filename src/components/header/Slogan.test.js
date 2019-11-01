import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../../test/testUtils'
import Slogan from './Slogan'

/**
 * Factory function to create a ShallowWrapper for the Header component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Slogan />)
}

describe('Slogan', () => {

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'slogan-component');
    expect(component.length).toBe(1);
  })

})
