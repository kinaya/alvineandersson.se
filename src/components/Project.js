import React, { Component} from "react";
import { Link } from "react-router-dom";

const Project = ({project, navigate}) => {

    let tags = [];
    project.extendedTags.map((tag, i) => {
      {project.extendedTags.length -1 === i ? (
        tags.push(<span className="tag" key={i}>{tag}</span>)
      ) : (
        tags.push(<span className="tag" key={i}>{tag}, </span>)
      )}
    });

    return (
      <div className="project">
        <div className="image">
          <img src={project.img.url} />
        </div>
        <div className="info">
          <div className="what"><span>{project.what}</span></div>
          <Link onClick={() =>  navigate('right')} to={`/projects/${project.id}`} className="title" >
            {project.title}
          </Link>
          <div className="tags">{project.date}</div>
        </div>
      </div>
    );
}

export default Project;
