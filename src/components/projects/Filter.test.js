import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Filter, { UnconnectedFilter } from './Filter';
import { getUniqueTags } from '../../helpers'
import projects from "../../data/projects.json";

const defaultInitialState = {
  projects: {
    currentFilter: [],
    projects: projects
  }
}

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Filter store={store} />).dive()
  return wrapper;
}

const setupWithoutDive = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Filter store={store} />)
  return wrapper;
}

describe('Filter', () => {

  it('renders component without error', () => {
    const wrapper = setup(defaultInitialState)
    const component = findByTestAttr(wrapper, 'filter-component')
    expect(component.length).toBe(1)
  })

  it('renders a series of buttons', () => {
    const wrapper = setup(defaultInitialState)
    const component = findByTestAttr(wrapper, 'filter-button')
    expect(component.length).not.toBeLessThan(1)
  })

  it('shows the same number of buttons as unique tags', () => {
    const wrapper = setup(defaultInitialState)
    const component = findByTestAttr(wrapper, 'filter-button')
    const filterArray = getUniqueTags(projects);
    expect(component.length).toBe(filterArray.length)
  })

  it('shows one active button if there is one active filter', () => {
    const state = {
      projects: {
        currentFilter: ['Drupal'],
        projects: projects
      }
    }
    const wrapper = setup(state)
    const component = wrapper.find('.active');
    expect(component.length).toBe(1);
  })

  it('when an item is in the filter, it is displayed with an active class', () => {
    const state = {
      projects: {
        currentFilter: ['Wordpress'],
        projects: projects
      }
    }
    const wrapper = setup(state)
    const component = wrapper.find('.active');
    expect(component.text()).toBe("Wordpress");
  })

})

describe('Filter redux props', () => {
  test('has currentFilter and projects piece of state as prop', () => {
    const state = {
      projects: {
        currentFilter: ['Drupal'],
        projects: projects
      }
    }
    const wrapper = setupWithoutDive(state)
    const currentFilterProps = wrapper.prop('currentFilter');
    const projectsProps = wrapper.prop('projects');
    expect(currentFilterProps).toBe(state.projects.currentFilter);
    expect(projectsProps).toEqual(state.projects.projects);
  })
  test('`filterProjects` action creator is a function prop', () => {
    const wrapper = setupWithoutDive(defaultInitialState)
    const filterProjectsProps = wrapper.prop('filterProjects');
    expect(filterProjectsProps).toBeInstanceOf(Function)
  })
})

describe('`filterProject` action trigger', () => {
  let filterProjectsMock;
  let wrapper;
  let tagButton;

  beforeEach(() => {
    filterProjectsMock = jest.fn();
    const props = {
      projects: projects,
      currentFilter: [],
      filterProjects: filterProjectsMock
    }
    wrapper = shallow(<UnconnectedFilter {...props} />)

    tagButton = findByTestAttr(wrapper, 'filter-button');
    tagButton.first().simulate('click');
  })

  test('`filterProject` runs when tag is clicked', () => {
    const filterProjectsCallCount = filterProjectsMock.mock.calls.length;
    expect(filterProjectsCallCount).toBe(1);
  })

  test('`filterProject` runs with correct arguments', () => {
    const filterProjectsCallArg = filterProjectsMock.mock.calls[0][0];
    expect(filterProjectsCallArg).toBe(tagButton.first().text());
  })

})
