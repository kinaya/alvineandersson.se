import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Projects from './Projects';
import { getUniqueTags } from '../../helpers'

// Is this correct?
import projects from "../../data/projects.json";

const defaultInitialState = {
  projects: {
    currentFilter: [],
    projects: projects
  },
  animation: {
    projects: true
  }
}

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Projects store={store} />).dive();
  return wrapper;
}

describe('Projects', () => {

  it('renders component without error', () => {
    const wrapper = setup(defaultInitialState)
    const component = findByTestAttr(wrapper, 'projects-component')
    expect(component.length).toBe(1)
  })

})
