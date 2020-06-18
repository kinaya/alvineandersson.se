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
const Projects = ({projects, currentFilter, animation, scrollToContent, getContentHeight, fullScreen, sectionStyle}) => {

  const [filtering, setFiltering] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [inlineStyle, setInlineStyle] = useState({})
  const [firstRender, setFirstRender] = useState(true)

  const projectsRef = useRef(null)

  /*const _setHeight = () => {
    const vh = projectsRef.current.offsetHeight + 20;
    setInlineStyle({'height': `${vh}px`})
  }*/

  useEffect(() => {

    if(firstRender) {
      //_setHeight()
      setFirstRender(false)
    } else {
      setFiltering(true)
      setTimeout(() => {
        let filteredProjects = projects.filter(project => currentFilter.length == 0 || project.tags.some(r => currentFilter.indexOf(r) >= 0));
        setFilteredProjects(filteredProjects)
        setFiltering(false)
      }, 300)
    }

    getContentHeight('projects', projectsRef.current.offsetHeight)
    const resizeHandler = () => {
      getContentHeight('projects', projectsRef.current.offsetHeight)
    }
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)

  }, [currentFilter, projectsRef.current])

  return (
    <section data-test="projects-component" className="projects" style={sectionStyle}>
			<div className="container" ref={projectsRef} style={inlineStyle} >

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
