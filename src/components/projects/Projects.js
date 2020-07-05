import React, { useState, useRef, useEffect } from "react";
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import { connect } from 'react-redux';

import Project from "./Project";
import Filter from './Filter';
import JumpingTitle from '../common/JumpingTitle';

/**
 * Component that displays projects
 * @param {array} props.projects - A list of projects
 * @param {array} props.currentFilter - The current filter
 * @param {bool} props.animation - If the animation is true or false
 */
const Projects = ({projects, currentFilter, animation, scrollToContent, fullScreen, windowSize}, ref) => {

  const [filtering, setFiltering] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [inlineStyle, setInlineStyle] = useState({'height': 'auto'})

  const projectListRef = useRef(null)
  const filterContainerRef = useRef(null)

  useEffect(() => {
    _setInlineStyle()
  }, [windowSize, fullScreen])

  // Set inline height of projects area, so it doesn't jump when fullScreen filtering
  const _setInlineStyle = () => {
    if(fullScreen) {
      // Height of the area with projects when all are visible
      const numberOfRows = window.innerWidth >= 736 ? 3 : 4;
      const projectHeight = projectListRef.current.firstElementChild.offsetHeight;
      const projectsHeight = projectHeight * numberOfRows + 30;
      // Height of the filterContainer
      const filterContainerHeight = filterContainerRef.current.offsetHeight;
      // Set the height of the whole container
      setInlineStyle({'height': `${projectsHeight + filterContainerHeight}px`})
    }
  }

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
    <section ref={ref} data-test="projects-component" className="projects">
			<div className="container">
        <div className="container-inner" style={fullScreen ? inlineStyle : {'height': 'auto'}}>

          <div className="filter-container" ref={filterContainerRef}>
            <JumpingTitle title="Portfolio" />
            <Filter />
          </div>

          <div className={`project-list filtering-${filtering}`} ref={projectListRef}>
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
    animation: state.animation.projects,
    windowSize: state.fullScreen.windowSize,
    fullScreen: state.fullScreen.active
  }
}

/*export default connect(
  mapStateToProps,
  null
)(Projects)*/

const connectAndForwardRef = (
  mapStateToProps = null,
  mapDispatchToProps = null,
  mergeProps = null,
  options = {},
) => component => connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  {
    ...options,
    forwardRef: true,
  },
)(React.forwardRef(component));

export default connectAndForwardRef(mapStateToProps, null)(Projects)
