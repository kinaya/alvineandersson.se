import React, { Component} from "react";
import Project from "./Project";
import Filters from './Filters';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Projects = ({ projects, filterProjects, currentFilter, navigate}) => {

  return (
    <div className="container projects">
			<div className="inner">

        <h2>Portfolio</h2>

        <Filters filterProjects={(filterItem) => filterProjects(filterItem)} projects={projects} currentFilter={currentFilter} />

        <div className="wrapper">
          <TransitionGroup>
            {projects.map((project, i) => {
              if(currentFilter.length == 0 || project.tags.some(r => currentFilter.indexOf(r) >= 0)) {
                return (
                  <CSSTransition key={i} timeout={500} classNames="filter">
                    <Project project={project}/>
                  </CSSTransition>
                )
              }
            })}
          </TransitionGroup>
        </div>

			</div>
    </div>
  );

}

export default Projects;
