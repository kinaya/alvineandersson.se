import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import ProjectPage from './ProjectPage';
import Project from './Project';
import { getNextProject } from '../../helpers'
import projects from "../../data/projects.json";

const defaultProps = {projects: projects, project: projects[0]}

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
    expect(component.find('span').text()).toBe('Case story')
    expect(component.find('h1').text()).toBe(projects[0].title)
    expect(component.find('p').text()).toBe(projects[0].info)
  });

  it('renders project stats with correct info from props', () => {
    const wrapper = setup();
    const stats = findByTestAttr(wrapper, 'project-stats');
    expect(stats.length).toBe(1)
    // Check all the different if..?
  })

  describe('renders the project content correctly from props', () => {

    it('when content is empty', () => {
      const change = { content: [] }
      const props = {
        ...defaultProps,
        project: {
          ...projects[0],
          ...change
        }
      }
      const wrapper = setup(props)
      const component = findByTestAttr(wrapper, 'project-content');
      expect(component.length).toBe(0)
    })

    it('when content has one piece', () => {
      const change = { content: [{"headline": "a", "paragraph": "b"}]}
      const props = {
        ...defaultProps,
        project: {
          ...projects[0],
          ...change
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

    // Check so the src is the correct image
    const imageSrc = imageDiv.find('img').prop('src') // test-file-stub
    const sourceWebp = imageDiv.find('[type="image/webp"]').prop('srcSet') // test-file-stub

  })

  it('renders the navigation and next link correctly', () => {
    const wrapper = setup();
    const navigation = findByTestAttr(wrapper, 'project-navigation');
    expect(navigation.length).toBe(1)

    const project = navigation.find('Project');
    expect(project.length).toBe(1)

    // Get the variable nextProject
    // Check so the passed nextProject var is correct

  })

})
