import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Project from './Project';
import { getNextProject } from '../../helpers'
import PropTypes from 'prop-types'

const ProjectPage = ({project, projects}) => {

  const nextProject = getNextProject(projects, project)

  return (
    <div data-test="project-page-component" className={`projectPage ${project.id}`} >
      <div className="container">

        <Link data-test="project-page-logo" className="logo" to="/">
          <span>A</span>
        </Link>

        <div className="page-header">
          <span className="case">Case story</span>
          <h1 data-test="project-page-title" className="project-title">{project.title}</h1>
          <p className="description">{project.info}</p>
        </div>

        <div className="featuredImage">
          <picture>
            <source type="image/webp" srcSet={require(`../../images/${project.image.url}.webp`)} />
            <img alt={project.image.alt} src={require(`../../images/${project.image.url}`)} />
          </picture>
        </div>

          {project.content &&
            project.content.map((paragraph, i) => { return (
              <div key={i}>
                <h2>{paragraph.headline}</h2>
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

        <div className="navigation">
          {nextProject &&
            <Project animation={true} project={nextProject} />
          }
        </div>

      </div>
    </div>
  );
}

ProjectPage.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  project: PropTypes.object.isRequired
}

export default ProjectPage;
