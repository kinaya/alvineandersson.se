import React, { Component } from "react";
import { Link } from "react-router-dom";

const NextProject = ({nextProject}) => {

  return (
      <div className="navigation">
        <div className="inner">
        {nextProject &&
          <div className={`project ${nextProject.id}`}>
          <Link to={`/projects/${nextProject.id}`} className="inner-div">
            <div className="image"><img src={require(`../../images/${nextProject.listimg.url}`)} /></div>
            <div className="info">
              <div className="what"><span>{nextProject.what}</span></div>
              <div className="title">
              {nextProject.title}
              </div>
              <div className="tags">{nextProject.date}</div>
            </div>
            </Link>
          </div>
        }
        </div>
      </div>
  );

}

export default NextProject;
