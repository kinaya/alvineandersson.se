import React from 'react';
import Project from './Project';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils.js';
import projects from "../../data/projects.json";

const defaultProps = {
  project: projects[0],
  animation: true
}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Project {...setupProps} />)
}

describe("Project", () => {

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'project-component');
    expect(component.length).toBe(1);
  })

  it('renders a link to the project', () => {
    const wrapper = setup(); // This is the VisibilitySensor

    //console.log(wrapper.debug()) // The VisibilitySensor
    //console.log(wrapper.children().debug()) // [function]
    //const component = findByTestAttr(wrapper.children(), 'project-link');

    //expect(component.length).toBe(1);
    // Find out where the link is linking!
  })

  it('does not throw a warning with expected props', () => {
    checkProps(Project, defaultProps)
  })

});
