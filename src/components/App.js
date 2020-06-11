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
  const skillsRef = useRef(null);
  const matchmakingRef = useRef(null);
  const footerRef = useRef(null);
  const topRef = useRef(null);
  const didMountRef = useRef(false);

  useEffect(() => {
    if(didMountRef.current) {
      setTimeout(function() {
        if(location.pathname == '/' && projectsRef) {
          scrollIntoView(projectsRef.current,{time:0, align:{top:0}})
        } else {
          scrollIntoView(topRef.current,{time:0, align:{top:0}})
        }
      }.bind(this), 500);
    } else {
      didMountRef.current = true;
    }
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
              <Header scrollToContent={() => _scrollToContent(contentRef)} />
              <div ref={contentRef} />
              <Services scrollToContent={() => _scrollToContent(projectsRef)}/>
              <div ref={projectsRef} />
              <Projects scrollToContent={() => _scrollToContent(skillsRef)}/>
              <div ref={skillsRef} />
              <Skills scrollToContent={() => _scrollToContent(matchmakingRef)}/>
              <div ref={matchmakingRef} />
              <Matchmaking scrollToContent={() => _scrollToContent(footerRef)}/>
              <div ref={footerRef} />
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
