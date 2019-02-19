import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Filters, { UnconnectedFilters } from './Filters';
import { getUniqueTags } from '../../helpers'

// Is this correct?
import projects from "../../data/projects.json";

const defaultInitialState = {
  projects: {
    currentFilter: [],
    projects: projects
  }
}

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Filters store={store} />).dive()
  // Get from higher order connected component to the component that accually has the values
  // dive() -> get the child, ie a non connected class component, of the higher order connected component..
  // The connected component only has a placeholder for the child
  return wrapper;
}

// This is just stupid
const setupWithoutDive = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Filters store={store} />)
  return wrapper;
}

describe('Filters', () => {

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
    //const component = wrapper.find('.unactive');
    const component = findByTestAttr(wrapper, 'filter-button')
    const filterArray = getUniqueTags(projects);
    expect(component.length).toBe(filterArray.length)
  })

  it('shows one active button if there is one active filter', () => {
    // This is counting on there being a project with the tag of "Drupal",
    // If not this test will fail...
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
    // This is counting on there being a project with the tag of "Drupal",
    // If not this test will fail...
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

  //it('the onClick works as expected', () => {
  //})

})

describe('Filters redux props', () => {
  // I cannot access the props when using dive().
  // So I had to create a different setup for these...
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
    // Create a mock function
    filterProjectsMock = jest.fn();
    // Set up the component with filetProjectMock as prop
    // We can't use our setup bc it uses the real function
    // We are using a mock bc we can see when it is called. We cannot do that with the real one
    const props = {
      projects: projects,
      currentFilter: [],
      filterProjects: filterProjectsMock
    }
    wrapper = shallow(<UnconnectedFilters {...props} />)

    // Simulate a click on the first tag button
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
