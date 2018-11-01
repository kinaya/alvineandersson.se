import React, { Component} from "react";

const Project = ({project}) => {

    let tags = [];
    project.extendedTags.map((tag, i) => {
      {project.extendedTags.length -1 === i ? (
        tags.push(<span className="tag" key={i}>{tag}</span>)
      ) : (
        tags.push(<span className="tag" key={i}>{tag},</span>)
      )}
    });

    return (
      <div className="project">
        <img src={project.img.url} />
        <div className="info">
				   <h3 className="title">{project.title}</h3>
          <div className="tags"><span className="date">{project.date} |</span>{tags}</div>
          <p className="description">{project.description}{project.designer ? <span className="designer"> Form <a href={project.designer.url}>{project.designer.name}</a></span> : ''}</p>
          <div className="links">
            {project.github ? <a href={project.github}>github</a> : ''}
            {project.link ? <a href={project.link}>www</a> : ''}
          </div>
        </div>
      </div>
    );
}

export default Project;
