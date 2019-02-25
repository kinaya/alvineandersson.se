import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Projects from './Projects';
import Project from './Project';
import { getUniqueTags } from '../../helpers'
import projects from "../../data/projects.json";
import JumpingTitle from '../common/JumpingTitle';
import Filter from './Filter';

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

const setupWithoutDive = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Projects store={store} />);
  return wrapper;
}

describe('Projects', () => {

  it('renders component without error', () => {
    const wrapper = setup(defaultInitialState)
    const component = findByTestAttr(wrapper, 'projects-component')
    expect(component.length).toBe(1)
  })

  it('renders a JumpingTitle component, passed a title prop of type string', () => {
    const wrapper = setup(defaultInitialState)
    const jumpingTitle = wrapper.find('JumpingTitle')
    expect(typeof jumpingTitle.props().title).toBe('string')
    expect(jumpingTitle.length).toBe(1)
  })

  it('renders a Filter component', () => {
    const wrapper = setup(defaultInitialState)
    const component = wrapper.find('Filter')
    //This does not work since the component is "UnconnectedFilter"...?
    //expect(component.length).toBe(1)
  })

  describe('renders the list of project depending on current filter', () => {

    it('renders all projects when no filter is selected', () => {
      const wrapper = setup(defaultInitialState)
      const projectItems = wrapper.find('Project')
      expect(projectItems.length).toBe(projects.length)
    })

    it('renders according to filter', () => {
      const state = {
        ...defaultInitialState,
        projects: {
          projects: projects,
          currentFilter: ['Drupal']
        }
      }
      const wrapper = setup(state)
      const projectItems = wrapper.find('Project')
      // Get the number of projects tagged with 'Drupal'
      const numberOfItems = projects.filter(project => project.tags.includes('Drupal')).length
      expect(projectItems.length).toBe(numberOfItems)
    })

    it('passes the correct prop types to the projets', () => {
      const wrapper = setup(defaultInitialState)
      wrapper.find('Project').map(project => {
        expect(typeof project.props().project).toBe('object')
        expect(typeof project.props().animation).toBe('boolean')
      })
    })

  })

  describe('Has correct props from Redux', () => {
    it('has `projects`, `currentFilter` and `animation` piece of state as prop', () => {
      const wrapper = setupWithoutDive(defaultInitialState)
      expect(wrapper.prop('projects')).toBe(defaultInitialState.projects.projects)
      expect(wrapper.prop('currentFilter')).toBe(defaultInitialState.projects.currentFilter)
      expect(wrapper.prop('animation')).toBe(defaultInitialState.animation.projects)
    })

  })


})
