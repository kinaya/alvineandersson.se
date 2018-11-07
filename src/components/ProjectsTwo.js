import React, { Component} from "react";
import ProjectTwo from "./ProjectTwo";
//import FlipMove from 'react-flip-move';
import Filters from './Filters'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const ProjectsTwo = ({ projects, filterProjects, currentFilter, navigate }) => {

  // Create the array with Filter that shuld be visible
  // If the currentFilter array is empty, display all
  // If not, display the ones containing a tag in currentFilter
  let projectArray = [];
  if(currentFilter.length === 0) {
    projects.map((project, i) => {
      projectArray.push(
        <CSSTransition key={i} timeout={500} classNames="listanimate">
          <ProjectTwo key={i} navigate={navigate} project={project} />
        </CSSTransition>
      )
    })
  } else {
    for(let i = 0; i < projects.length; i++) {
      let project = projects[i];
      if(project.tags.some(r => currentFilter.indexOf(r) >= 0)) {
        projectArray.push(
          <CSSTransition key={i} timeout={500} classNames="listanimate">
            <ProjectTwo key={i} navigate={navigate} project={project} />
          </CSSTransition>
        )
      }
    }
  }

    return (
      <div className="container projectsTwo">
				<div className="inner">
          <h2>Utvalda projekt</h2>
          <div className="filter">
            <Filters filterProjects={(filterItem) => filterProjects(filterItem)} projects={projects} currentFilter={currentFilter} />
          </div>
          <div className="wrapper">
            <TransitionGroup className="project-list">
              {projectArray}
            </TransitionGroup>
          </div>
				</div>
      </div>
    );

}

export default ProjectsTwo;
