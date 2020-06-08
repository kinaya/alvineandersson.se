import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import scrollIntoView from 'scroll-into-view';
import {connect} from 'react-redux';

import Header from "./header/Header";
import Skills from "./skills/Skills";
import Footer from "./footer/Footer";
import Services from "./services/Services";
import Projects from "./projects/Projects"
import Matchmaking from "./matchmaking/Matchmaking";
import ProjectPage from "./projects/ProjectPage";
import NotFound from "./NotFound";

import "../scss/App.scss";

const App = ({projects, location, animation}) => {

  const projectsRef = useRef(null);
  const contentRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    setTimeout(function() {
      if(location.pathname == '/' && projectsRef) {
        scrollIntoView(projectsRef.current,{time:0, align:{top:0}})
      } else {
        scrollIntoView(topRef.current,{time:0, align:{top:0}})
      }
    }.bind(this), 500);
  }, [location.pathname])

  const _scrollToContent = (ref) => {
    scrollIntoView(ref.current,{time:500,align:{top:0}});
  }

  return (
    <div data-test="app-component" ref={topRef} className={`App animate-projects-${animation.projects}`}>

      <Link data-test="app-logo" className="logo" to="/" >
        <span>A</span>
      </Link>

      <TransitionGroup component="main" className="page-main">

        <CSSTransition key={location.pathname} timeout={1000} classNames="fade" appear>

        <Switch location={location}>

          <Route exact path="/" render={() => (
            <div className="front-page">
              <Header onClick={() => _scrollToContent(contentRef)} />
              <div ref={contentRef} />
              <Services />
              <div ref={projectsRef} />
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

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
    animation: state.animation
  }
}

export default withRouter(connect(
  mapStateToProps,
  null
)(App))
