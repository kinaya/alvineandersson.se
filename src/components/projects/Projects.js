import React, { Component} from "react";
import Project from "./Project";
import Filters from './Filters';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import VisibilitySensor from "react-visibility-sensor";

class Projects extends React.Component {

  constructor(props) {
    super(props)
    this.state = {visible: false, projectvisible: false}
    this.onChangeVisibility = this.onChangeVisibility.bind(this);
  }

  // Only trigger animation once
  onChangeVisibility(isVisible) {
    this.setState({visible: isVisible})
  }

  render() {

    const { projects, filterProjects, currentFilter, navigate, animation} = this.props;

  return (
    <div className="container projects">
			<div className="inner">

      <VisibilitySensor onChange={this.onChangeVisibility} active={!this.state.visible} partialVisibility={true} >
      {({isVisible}) =>
        <h2 className={isVisible ? 'visible' : 'invisible'}><span>P</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span></h2>
      }
      </VisibilitySensor>


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
}

export default Projects;
