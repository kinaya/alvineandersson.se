import React, { useState, useRef, useEffect } from "react";
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import { connect } from 'react-redux';
import useResizeAware from 'react-resize-aware';

import Project from "./Project";
import Filter from './Filter';
import JumpingTitle from '../common/JumpingTitle';

/**
 * Component that displays projects
 * @param {array} props.projects - A list of projects
 * @param {array} props.currentFilter - The current filter
 * @param {bool} props.animation - If the animation is true or false
 */
const Projects = ({projects, currentFilter, animation, scrollToContent, getContentHeight, fullScreen, sectionStyle}) => {

  const [filtering, setFiltering] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [inlineStyle, setInlineStyle] = useState({'height': 'auto'})
  const projectsRef = useRef(null)
  const innerRef = useRef(null)

  const [resizeListener, sizes] = useResizeAware();

  // Get height of section and set inner height for container
  // Todo: ResizeHandler need to use the height when no filters are applied.
  // If first filtering and then resizing, the height is wrong
  useEffect(() => {

    setInlineStyle({'height': `${innerRef.current.offsetHeight + 20}px`})
    getContentHeight('projects', projectsRef.current.offsetHeight + 40)

    const resizeHandler = () => {
      getContentHeight('projects', projectsRef.current.offsetHeight + 40)
      setInlineStyle({'height': `${innerRef.current.offsetHeight}px`})
    }

    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)

  }, [projectsRef.current, fullScreen])

  // Handle user filtering
  useEffect(() => {

    setFiltering(true)

    setTimeout(() => {
      let filteredProjects = projects.filter(project => currentFilter.length == 0 || project.tags.some(r => currentFilter.indexOf(r) >= 0));
      setFilteredProjects(filteredProjects)
      setFiltering(false)
    }, 300)

  }, [currentFilter])

  return (
    <section data-test="projects-component" className="projects" style={sectionStyle}>
			<div className="container" ref={projectsRef} style={fullScreen ? inlineStyle : {'height': 'auto'}} >
        <div className="container-inner" ref={innerRef} >
          {resizeListener}
          Sizes: {sizes.width} x {sizes.height}
          <JumpingTitle title="Portfolio" />

          <Filter />

          <div className={`project-list filtering-${filtering}`}>
            {filteredProjects.map((project, i) => { return (
              <Project key={i} filtering={filtering} animation={animation} project={project} />
            )})}
          </div>

          {fullScreen && (
            <div data-test="header-scrollarrow" onClick={scrollToContent} className="scrollarrow"></div>
          )}

        </div>
			</div>
    </section>
  );

}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
    currentFilter: state.projects.currentFilter,
    animation: state.animation.projects
  }
}

export default connect(
  mapStateToProps,
  null,
)(Projects)
