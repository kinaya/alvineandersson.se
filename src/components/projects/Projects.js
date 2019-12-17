import React, { Component} from "react";
import Project from "./Project";
import Filter from './Filter';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import JumpingTitle from '../common/JumpingTitle';
import { connect } from 'react-redux';

/**
 * Component that displays projects
 * @param {array} props.projects - A list of projects
 * @param {array} props.currentFilter - The current filter
 * @param {bool} props.animation - If the animation is true or false
 */
const Projects = ({projects, currentFilter, animation}) => {

  return (
    <section data-test="projects-component" className="projects">
			<div className="container narrow">

        <JumpingTitle title="Portfolio" />

        <Filter />

        <TransitionGroup className="project-list">
          {projects.map((project, i) => {
            if(currentFilter.length == 0 && project.pinned || project.tags.some(r => currentFilter.indexOf(r) >= 0)) {
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
