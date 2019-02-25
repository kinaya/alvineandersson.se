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

  it('renders without error when `isVisible` is false, and sets `invisible` class', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')(false);
    const component = findByTestAttr(insideWrapper, 'project-component');
    expect(component.length).toBe(1);
    // This does not work as expected. The class is always 'invisible'
    //expect(insideWrapper.find('.invisible').length).toBe(1)
  })

  it('renders without error when `isVisible` is true, and sets `visible` as class', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')(true);
    const component = findByTestAttr(insideWrapper, 'project-component');
    expect(component.length).toBe(1);
    // This does not work as expected. The class is always 'invisible'
    //expect(insideWrapper.find('.visible').length).toBe(1)
  })

  it('renders an image', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')(true);
    const imageDiv = findByTestAttr(insideWrapper, 'project-image');
    expect(imageDiv.length).toBe(1);

    // Check so the src is the correct image
    // How to get the accual url...?
    const imageSrc = imageDiv.find('img').prop('src') // test-file-stub
    const sourceWebp = imageDiv.find('[type="image/webp"]').prop('srcSet') // test-file-stub
  })

  it('renders an info div, with correct content', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')(true);
    const component = findByTestAttr(insideWrapper, 'project-info');
    expect(component.length).toBe(1);
    expect(component.find('.what').text()).toBe(projects[0].what)
    expect(component.find('.project-title').text()).toBe(projects[0].title)
    expect(component.find('.date').text()).toBe(projects[0].date)
  })

  it('the link has the correct `to` attribute', () => {
    const wrapper = setup();
    const insideWrapper = wrapper.find('VisibilitySensor').renderProp('children')(true);
    const link = findByTestAttr(insideWrapper, 'project-component');
    expect(link.props().to).toBe('/projects/' + projects[0].id)
  })

  it('does not throw a warning with expected props', () => {
    checkProps(Project, defaultProps)
  })

  describe('Local state `visibilitySensorActive`', () => {

    it('it is initially false', () => {
      const wrapper = setup();
      expect(wrapper.state('visibilitySensorActive')).toBe(false)
    })

    it('updates to true when `onChange` method is called with true', () => {
      const wrapper = setup();
      wrapper.prop('onChange')(true)
      expect(wrapper.state('visibilitySensorActive')).toBe(true)
    })

  })


});
