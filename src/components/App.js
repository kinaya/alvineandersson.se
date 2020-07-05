import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import scrollIntoView from 'scroll-into-view';
import {connect} from 'react-redux';
import { setFullScreen, setWindowSize } from '../actions/';

import Header from "./header/Header";
import Skills from "./skills/Skills";
import Footer from "./footer/Footer";
import Services from "./services/Services";
import Projects from "./projects/Projects"
import Matchmaking from "./matchmaking/Matchmaking";
import ProjectPage from "./projects/ProjectPage";
import NotFound from "./NotFound";

import "../scss/App.scss";

const App = ({projects, location, animation, windowSize, fullScreen, setFullScreen, setWindowSize}) => {

  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const matchmakingRef = useRef(null);
  const footerRef = useRef(null);
  const topRef = useRef(null);
  const didMountRef = useRef(false);

  // Run on path change only
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

  // Set up window resize listener on mount
  useEffect(() => {
    setWindowSize()
    window.addEventListener('resize', setWindowSize)
    return () => window.removeEventListener('resize', setWindowSize)
  }, [])

  // Check if FullScreen when window resizes
  // Todo: This does not work properly on resize.
  // Need to trigger this when the refs update
  useEffect(() => {
    const sections = [
      servicesRef.current.firstElementChild.offsetHeight + 40,
      skillsRef.current.firstElementChild.offsetHeight + 40,
      projectsRef.current.firstElementChild.offsetHeight + 40,
      matchmakingRef.current.firstElementChild.offsetHeight + 40,
      footerRef.current.firstElementChild.offsetHeight + 40
    ]
    // If at least one section is
    const fullScreen = !sections.some(section => section > windowSize[1]);
    setFullScreen(fullScreen)
  }, [windowSize])

  const _scrollToContent = (ref) => {
    scrollIntoView(ref.current, {time: 500, align: {top:0}});
  }

  return (
    <div data-test="app-component" ref={topRef} className={`App fullScreen-${fullScreen} animate-projects-${animation.projects}`}>

      <Link data-test="app-logo" className="logo" to="/" >
        <span>A</span>
      </Link>

      <TransitionGroup component="main" className="page-main">

        <CSSTransition key={location.pathname} timeout={1000} classNames="fade" appear>

        <Switch location={location}>

          <Route exact path="/" render={() => (
            <div className="front-page">
              <Header
                scrollToContent={() => _scrollToContent(servicesRef)}
                windowSize={windowSize}
              />
              <Services
                ref={servicesRef}
                scrollToContent={() => _scrollToContent(projectsRef)}
                fullScreen={fullScreen}
              />
              <Projects
                ref={projectsRef}
                scrollToContent={() => _scrollToContent(skillsRef)}
              />
              <Skills
                ref={skillsRef}
                scrollToContent={() => _scrollToContent(matchmakingRef)}
                fullScreen={fullScreen}
              />
              <Matchmaking
                ref={matchmakingRef}
                scrollToContent={() => _scrollToContent(footerRef)}
              />
              <Footer
                ref={footerRef}
              />
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
    animation: state.animation,
    fullScreen: state.fullScreen.active,
    windowSize: state.fullScreen.windowSize
  }
}

export default withRouter(connect(
  mapStateToProps,
  {setFullScreen, setWindowSize}
)(App))
