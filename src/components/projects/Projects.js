import React, { Component} from "react";
import Project from "./Project";
import Filters from './Filters';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import JumpingTitle from '../common/JumpingTitle';

const Projects = ({projects, filterProjects, currentFilter, navigate, animation}) => {

  return (
    <div className="container projects">
			<div className="inner">

        <JumpingTitle title="Portfolio" />

        <Filters filterProjects={(filterItem) => filterProjects(filterItem)} projects={projects} currentFilter={currentFilter} />

        <div className="wrapper">
          <TransitionGroup>
            {projects.map((project, i) => {
              if(currentFilter.length == 0 || project.tags.some(r => currentFilter.indexOf(r) >= 0)) {
                return (
                  <CSSTransition key={i} timeout={500} classNames="filter">
                    <Project animation={animation} project={project}/>
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
