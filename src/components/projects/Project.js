import React, { Component} from "react";
import { Link } from "react-router-dom";

const Project = ({project}) => {

  return (
    <div className="project">
      <div className="inner-div">

        <div className="image">
          <img src={require(`../../images/${project.listimg.url}`)} />
        </div>

        <div className="info">
          <div className="what"><span>{project.what}</span></div>

          <Link to={`/projects/${project.id}`} className="title" >
            {project.title}
          </Link>

          <div className="tags">{project.date}</div>
        </div>

      </div>
    </div>
  );
}

export default Project;
