import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import NextProject from './NextProject';

const ProjectPage = ({project, projects}) => {

  // Get the next project
  let nextProject = {}
  let index = projects.indexOf(project);
  if(index >= 0 && index < projects.length -1) {
    nextProject = projects[index +1]
  } else if(index >=0 && index == projects.length -1) {
    nextProject = projects[0]
  }

  return (
    <div className={`projectPage ${project.id}`} >

      <Helmet>
        <title>{project.title} | Alvine Andersson</title>
        <meta name="description" content={project.info} />
      </Helmet>

      <div className="container">

        <Link className="logo" to="/">
          <span>A</span>
        </Link>

        <div className="inner page-header">
          <span className="case">Case story</span>
          <h1 className="project-title">{project.title}</h1>
          <p className="description">{project.info}</p>
        </div>

        <div className="featuredImage"><img alt={project.image.alt} src={require(`../../images/${project.image.url}`)} /></div>

        <div className="inner">
          {project.content &&
            project.content.map((paragraph, i) => { return (
              <div key={i}>
                <h4>{paragraph.headline}</h4>
                <p>{paragraph.paragraph}</p>
              </div>
            )})
          }

          <div className="stats">
            <p><span>Datum:</span> {project.date}</p>
            <p><span>Tekniker:</span>{project.extendedTags}</p>
            {project.designer && <p><span>Form:</span> <a href={project.designer.url}>{project.designer.name}</a></p>}
            {project.github && <p><span>Github:</span> <a href={project.github.url}>{project.github.name}</a></p>}
            {project.link && project.link.url && <p><span>Url:</span> <a href={project.link.url}>{project.link.name}</a></p>}
          </div>

        </div>

        <NextProject nextProject={nextProject} />

      </div>
    </div>
  );
}

export default ProjectPage;
