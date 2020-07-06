import React, { useState, useRef, useEffect } from "react";
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import { connect } from 'react-redux';
import ReactResizeDetector from 'react-resize-detector';

import { checkFullScreen } from '../../actions/'
import Project from "./Project";
import Filter from './Filter';
import JumpingTitle from '../common/JumpingTitle';

/**
 * Component that displays projects
 * @param {array} props.projects - A list of projects
 * @param {array} props.currentFilter - The current filter
 * @param {bool} props.animation - If the animation is true or false
 */
const Projects = ({projects, currentFilter, animation, scrollToContent, fullScreen}) => {

  const [filtering, setFiltering] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [inlineStyle, setInlineStyle] = useState({'height': 'auto'})
  const filterContainerRef = useRef(null)

  // Handle user filtering
  useEffect(() => {
    setFiltering(true)
    setTimeout(() => {
      let filteredProjects = projects.filter(project => currentFilter.length == 0 || project.tags.some(r => currentFilter.indexOf(r) >= 0));
      setFilteredProjects(filteredProjects)
      setFiltering(false)
    }, 300)
  }, [currentFilter])

  // Set inline height of project area, so it doesn't jump when fullScreen filtering
  // Update when project blobs height change
  const onResize = (width, height) => {
    const numberOfRows = window.innerWidth >= 736 ? 3 : 4;
    if(window.innerHeight <= 700 && window.ninerWidth > window.innerHeight) {
      numberOfRows = 2;
    }
    const projectsHeight = height * numberOfRows + 30;

    const filterContainerHeight = filterContainerRef.current.offsetHeight;
    setInlineStyle({'height': `${projectsHeight + filterContainerHeight}px`})
  }

  return (
    <section data-test="projects-component" className="projects">
			<div className="container">
        <div className="container-inner" style={fullScreen ? inlineStyle : {'height': 'auto'}}>

          <div className="filter-container" ref={filterContainerRef}>
            <JumpingTitle title="Portfolio" />
            <Filter />
          </div>

          <div className={`project-list filtering-${filtering}`}>
            {filteredProjects.map((project, i) => {
              if(i === 0) { return (
                <ReactResizeDetector key={i} handleHeight onResize={onResize}>
                  <Project filtering={filtering} animation={animation} project={project} />
                </ReactResizeDetector>
              )} else { return (
                <Project key={i} filtering={filtering} animation={animation} project={project} />
              )}
            })}
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
    animation: state.animation.projects,
    fullScreen: state.fullScreen.active
  }
}

export default connect(
  mapStateToProps,
  {checkFullScreen}
)(Projects)
