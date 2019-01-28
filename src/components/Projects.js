import React, { Component} from "react";
import Project from "./Project";
//import FlipMove from 'react-flip-move';
import Filters from './Filters'

const Projects = ({ projects, filterProjects, currentFilter, navigate}) => {

    // Create the array with Filter that shuld be visible
    // If the currentFilter array is empty, display all
    // If not, display the ones containing a tag in currentFilter
    let projectArray = [];
    if(currentFilter.length === 0) {
      projects.map((project, i) => {
        projectArray.push(<Project key={i} navigate={navigate} project={project} />)
      })
    } else {
      for(let i = 0; i < projects.length; i++) {
        let project = projects[i];
        if(project.tags.some(r => currentFilter.indexOf(r) >= 0)) {
          projectArray.push(<Project key={i} navigate={navigate} project={project} />)
        }
      }
    }

    return(
      <div className="container projects">
				<div className="inner">
          <h2>Portfolio</h2>
          <Filters filterProjects={(filterItem) => filterProjects(filterItem)} projects={projects} currentFilter={currentFilter} />
          <div className="wrapper">
            {projectArray}
          </div>
				</div>
      </div>
    );

}

export default Projects;
