import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import ProjectPage from './ProjectPage';
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

  it('always renders a logo as a link', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'project-page-logo');
    expect(component.length).toBe(1);
    // to be of type A
    // to have a href of..
  });

  it('always renders a title with the text of the project title prop', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'project-page-title');
    expect(component.length).toBe(1);
    // How to get the props???
  });


})
