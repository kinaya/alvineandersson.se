import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import ProjectPage from './ProjectPage';
import Project from './Project';
import { getNextProject } from '../../helpers'
import projects from "../../data/projects.json";

// The default props
const defaultProps = {projects: projects, project: projects[0]}

/**
 * Factory function to create a ShallowWrapper for the ProjectPage component
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<ProjectPage {...setupProps} />)
}

describe('ProjectPage', () => {

  it('does not throw a warning with expected props', () => {
    checkProps(ProjectPage, defaultProps)
  })

  it('renders component without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'project-page-component')
    expect(component.length).toBe(1)
  })

  it('renders a page header with correct info from props', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'project-page-header');
    expect(component.length).toBe(1);
    expect(component.find('h1').text()).toBe(projects[0].title)
    expect(component.find('p').text()).toBe(projects[0].info)
  });

  it('renders project stats with correct info from props', () => {
    const wrapper = setup();
    const stats = findByTestAttr(wrapper, 'project-stats');
    expect(stats.length).toBe(1)
  })

  describe('renders the project content correctly from props', () => {

    it('when content is empty', () => {
      // Set up props where the project has epmty content
      const props = {
        ...defaultProps,
        project: {
          ...projects[0],
          ...{ content: []}
        }
      }
      const wrapper = setup(props)
      const component = findByTestAttr(wrapper, 'project-content');
      expect(component.length).toBe(0)
    })

    it('when content has one piece', () => {
      // Set up propr where the project has one piece of content
      const props = {
        ...defaultProps,
        project: {
          ...projects[0],
          ...{content: [{"headline": "a", "paragraph": "b"}]}
        }
      }
      const wrapper = setup(props)
      const component = findByTestAttr(wrapper, 'project-content');
      expect(component.length).toBe(1)
      expect(component.find('h2').text()).toBe('a')
      expect(component.find('p').text()).toBe('b')
    })

    it('content map has the number of children as the content pieces', () => {
      const wrapper = setup()
      const component = findByTestAttr(wrapper, 'project-content');
      expect(component.length).toBe(projects[0].content.length);
    })

  })

  it('renders a featured image', () => {
    const wrapper = setup();
    const imageDiv = findByTestAttr(wrapper, 'project-featured-image');
    expect(imageDiv.length).toBe(1)
  })

  it('renders the navigation to the next project correctly', () => {
    const wrapper = setup();

    // Check so there is a navigation project navigation with a project in it
    const navigation = findByTestAttr(wrapper, 'project-navigation');
    const project = navigation.find('Project');
    expect(navigation.length).toBe(1)
    expect(project.length).toBe(1)

    // Check so the next project from the helper function, is the same next project that is in the dom
    const nextProject = getNextProject(projects, projects[0]) // Same project as defaultProps in setup
    const domNextProject = wrapper.find('Project');
    expect(nextProject.id).toEqual(domNextProject.props().project.id);

  })

})
