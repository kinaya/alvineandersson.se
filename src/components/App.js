import React, { Component} from "react";
import Header from "./Header";
import Skills from "./Skills";
import Footer from "./Footer";
import Services from "./Services";
import ProjectsContainer from "../containers/ProjectsContainer";
import MatchmakingContainer from "../containers/MatchmakingContainer";
import "../App.scss";

const App = ({}) => {

  return(
    <div className="App">
			<Header />
      <Services />
      <ProjectsContainer />
      <Skills />
      <MatchmakingContainer />
			<Footer />
    </div>
  );

}

export default App;
