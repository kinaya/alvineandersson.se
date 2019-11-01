import React, { Component} from "react";
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import scrollIntoView from 'scroll-into-view';

import Header from "./header/Header";
import Skills from "./skills/Skills";
import Footer from "./footer/Footer";
import Services from "./services/Services";
import Projects from "./projects/Projects"
import Matchmaking from "./matchmaking/Matchmaking";
import ProjectPage from "./projects/ProjectPage";
import NotFound from "./NotFound";
import {connect} from 'react-redux';

import "../scss/App.scss";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.projectsRef = React.createRef();
    this.contentRef = React.createRef();
    this.topRef = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    const projectsRef = this.projectsRef;
    const topRef = this.topRef;

    if(nextProps.location.pathname != this.props.location.pathname) {

      setTimeout(function() {
        if(nextProps.location.pathname == '/' && projectsRef) {
          scrollIntoView(projectsRef.current,{time:0, align:{top:0}})
        } else {
          scrollIntoView(topRef.current,{time:0, align:{top:0}})
        }
      }.bind(this), 500);

    }
  }

  _scrollToContent(ref) {
    scrollIntoView(ref.current,{time:500,align:{top:0}});
  }

  render() {

    const { projects, location, animation } = this.props

    return (
      <div data-test="app-component" ref={this.topRef} className={`App animate-projects-${animation.projects}`}>

        <Link data-test="app-logo" className="logo" to="/" >
          <span>A</span>
        </Link>

        <TransitionGroup component="main" className="page-main">
          <CSSTransition key={location.pathname} timeout={1000} classNames="fade" appear>
          <Switch location={location}>

          <Route exact path="/" render={() => (
            <div className="front-page">
              <Header onClick={() => this._scrollToContent(this.contentRef)} />
              <div ref={this.contentRef} />
              <Services />
              <div ref={this.projectsRef} />
              <Projects />
              <Skills />
              <Matchmaking />
              <Footer />
            </div>
          )} />

          {projects && (
            <Route path="/projects/:projectid" render={({match}) => (
              <ProjectPage projects={projects} project={projects.find(p => p.id === match.params.projectid)} />
            )} />
          )}

          <Route component={NotFound} />

          </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    animation: state.animation
  }
}

export default withRouter(connect(
  mapStateToProps,
  null
)(App))
