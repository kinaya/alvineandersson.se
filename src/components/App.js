import React, { Component} from "react";
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import scrollIntoView from 'scroll-into-view';

import Header from "./header/Header";
import Skills from "./skills/Skills";
import Footer from "./footer/Footer";
import Services from "./services/Services";
import ProjectsContainer from "./projects/ProjectsContainer";
import MatchmakingContainer from "./matchmaking/MatchmakingContainer";
import ProjectPage from "./projects/ProjectPage";

import "../scss/App.scss";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.projectsRef = React.createRef();
    this.contentRef = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    const projectsRef = this.projectsRef;
    if(nextProps.location.pathname != this.props.location.pathname) {
      if(nextProps.location.pathname == '/') {
        if(projectsRef) {
          setTimeout(function(){
            scrollIntoView(projectsRef.current,{time:500,align:{top:0}})
          }, 1200);
        } else {
          setTimeout(function(){
            window.scrollTo(0,0)
          }, 500);
        }
      } else {
        setTimeout(function(){ window.scrollTo(0,0) }, 500);
      }
    }
  }

  _scrollToContent(ref) {
    console.log(ref);
    scrollIntoView(ref.current,{time:500,align:{top:0}});
  }

  render() {

    const { projects, location, animation } = this.props
    const currentKey = location.pathname

    return (
      <div className={`App animate-projects-${animation.projects}`}>

        <TransitionGroup component="main" className="page-main">
          <CSSTransition key={currentKey} timeout={1200} classNames="slide" appear>
          <div className='slide'>
          <Switch location={location}>

          <Route exact path="/" render={() => (
            <div className="docscroller">
              <Header onClick={() => this._scrollToContent(this.contentRef)} />
              <div ref={this.contentRef} />
              <Services />
              <div ref={this.projectsRef} />
              <ProjectsContainer />
              <Skills />
              <MatchmakingContainer />
              <Footer />
            </div>
          )} />

          {projects && (
            <Route path="/projects/:projectid" render={({match}) => (
              <ProjectPage projects={projects} project={projects.find(p => p.id === match.params.projectid)} />
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
