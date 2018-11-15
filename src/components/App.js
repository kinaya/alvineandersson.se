import React, { Component} from "react";
import Header from "./Header";
import HeaderTwo from "./HeaderTwo";
import Skills from "./Skills";
import Footer from "./Footer";
import Services from "./Services";
import Intro from "./Intro";
import ProjectsContainer from "../containers/ProjectsContainer";
import ProjectsContainerTwo from "../containers/ProjectsContainerTwo";
import MatchmakingContainer from "../containers/MatchmakingContainer";
import "../App.scss";

import Transition from 'react-transition-group/Transition';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import ProjectPage from "./ProjectPage";

class App extends React.Component {

render() {

  const { projects, location, navigate, direction } = this.props
  // const currentKey = location.pathname.split('/')[1] || '/'
  const currentKey = location.pathname

  return (
      <div className={`App ${direction}`}>
        <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={1200} classNames="slide" appear>
        <div className='slide'>
        <Switch location={location}>

        <Route exact path="/" render={() => (
            <div className="docscroller">
              <HeaderTwo />
              <Services />
              <ProjectsContainerTwo />
              <Skills />
              <MatchmakingContainer />
              <Footer />
            </div>
        )} />

        {projects && (
          <Route path="/projects/:projectid" render={({match}) => (
            <ProjectPage projects={projects} navigate={navigate} project={projects.find(p => p.id === match.params.projectid)} />
          )} />
        )}

        </Switch>
        </div>

        </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
