import React, { Component} from "react";
import Header from "./Header";
import Skills from "./Skills";
import Footer from "./Footer";
import Services from "./Services";
import Intro from "./Intro";
import ProjectsContainer from "../containers/ProjectsContainer";
import ProjectsContainerTwo from "../containers/ProjectsContainerTwo";
import MatchmakingContainer from "../containers/MatchmakingContainer";
import "../scss/App.scss";

import Transition from 'react-transition-group/Transition';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import ProjectPage from "./ProjectPage";

class App extends React.Component {


//componentDidMount() {
//  window.onpopstate = this.onBackOrForwardEvent;
//  window.onpopstate = (event) => {
//    this.props.navigate('left');
//    console.log(event);
//    console.log(this.props.history);

//    console.log('length:' + this.props.history.length);
//    console.log('index:' + this.props.history.index);
//    console.log(this.props.history.entries);

//    console.log('entried:' + this.props.history.entries);
    // Check if the location to be navigated to is the last location in state
    // If it is we are navigation backwards ie we checked that navigation was trough button and that it is backwards
    // If not the last location, we are navigating forwards!
//    let direction = 'right';
//    console.log('prev key:' + this.props.prevPathKey);
//    console.log('this key:' + this.props.history.location.key);
//    console.log('history:');
//    console.log(this.props.history);
//    if(this.props.history.action === 'POP') {
//      this.props.navigate('left');
/*      if(this.props.history.location.key === this.props.prevPathKey) {
        direction = 'left';
        console.log('going backwards/left!')
      } else {
        direction = 'right';
        console.log('going forwards/right!');
      }*/
  //  }
  //}
//}

//onBackOrForwardEvent = (e) => {
//    e.preventDefault();
//    console.log('back or forward button pressed');
  //  if (this.props.route.path !== '/app') {
       // ... do something
  //  }
//};

//componentWillReceiveProps() {

//  console.log('length:' + this.props.history.length);
//  console.log('index:' + this.props.history.index);
//  console.log(this.props.history.entries);



  // Save location key in state
//  this.props.locationChange(this.props.history.location.key);
//}


render() {

  const { projects, location, navigate, direction, animation } = this.props
  // const currentKey = location.pathname.split('/')[1] || '/'
  const currentKey = location.pathname

  return (
      <div className={`App ${direction} ${animation}`}>
        <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={1200} classNames="slide" appear>
        <div className='slide'>
        <Switch location={location}>

        <Route exact path="/" render={() => (
            <div className="docscroller">
              <Header />
              <Services />
              <ProjectsContainer />
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
