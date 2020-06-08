import React from "react";
import { Link } from "react-router-dom";
import Project from './Project';
import { getNextProject } from '../../helpers'
import PropTypes from 'prop-types'

/**
 * Component for displaying a project page.
 * @params {object} props.project - The project
 * @params {array} props.projects - The array of projects
 */
const ProjectPage = ({project, projects}) => {

  const nextProject = getNextProject(projects, project)

  return (
    <div data-test="project-page-component" className={`projectPage ${project.id}`} >
      <div className="container">

        <div data-test="project-page-header" className="page-header">
          <h1 className="project-title">{project.title}</h1>
          <p className="description">{project.info}</p>
        </div>

        <div data-test="project-featured-image" className="featuredImage">
          <picture>
            <source type="image/webp" srcSet={require(`../../images/${project.image.url}.webp`)} />
            <img alt={project.image.alt} src={require(`../../images/${project.image.url}`)} />
          </picture>
        </div>

        {project.content && project.content.map((paragraph, i) => { return (
          <div data-test="project-content" key={i}>
            <h2>{paragraph.headline}</h2>
            <p>{paragraph.paragraph}</p>
          </div>
        )})}

        <div data-test="project-stats" className="stats">
          <p><span>Datum:</span> {project.date}</p>
          <p><span>Tekniker:</span>{project.extendedTags}</p>
          {project.designer && <p><span>Form:</span> <a href={project.designer.url}>{project.designer.name}</a></p>}
          {project.github && <p><span>Github:</span> <a href={project.github.url}>{project.github.name}</a></p>}
          {project.link && project.link.url && <p><span>Url:</span> <a href={project.link.url}>{project.link.name}</a></p>}
        </div>

        <div data-test="project-navigation" className="navigation">
          {nextProject &&
            <Project animation={false} project={nextProject} />
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
