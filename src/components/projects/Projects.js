import React, { Component} from "react";
import Project from "./Project";
import Filter from './Filter';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import JumpingTitle from '../common/JumpingTitle';

const Projects = ({projects, currentFilter, animation}) => {

  return (
    <section data-test="projects-component" className="projects">
			<div className="container narrow">

        <JumpingTitle title="Portfolio" />

        <Filter />

        <TransitionGroup className="project-list">
          {projects.map((project, i) => {
            if(currentFilter.length == 0 || project.tags.some(r => currentFilter.indexOf(r) >= 0)) {
              return (
                <CSSTransition key={i} timeout={500} classNames="filter">
                  <Project animation={animation} project={project} />
                </CSSTransition>
              )
            }
          })}
        </TransitionGroup>

			</div>
    </section>
  );

}

import { connect } from 'react-redux'

function mapStateToProps(state) {
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
