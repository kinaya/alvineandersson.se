import React, { Component} from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from 'prop-types';

class Project extends React.Component {

  // Only trigger animation once
  state = {visibilitySensorActive : false}

  onChangeVisibility = isVisible => {
    this.setState({visibilitySensorActive: isVisible})
  }

  render() {

    const { project, animation } = this.props;

    return (
      <VisibilitySensor
        onChange={this.onChangeVisibility}
        active={!this.state.visibilitySensorActive}
        partialVisibility={true}
        data-test="project-component"
      >
        {({isVisible}) =>

        <Link data-test="project-link" to={`/projects/${project.id}`} className={`project ${project.id} ${isVisible ? 'visible' : 'invisible'}`}>
          <div className="image">
            <picture>
              <source type="image/webp" srcSet={require(`../../images/${project.listimg.url}.webp`)} />
              <img alt={project.listimg.alt} src={require(`../../images/${project.listimg.url}`)} />
            </picture>
          </div>

          <div className="info">
            <div className="what">{project.what}</div>
            <h3 className="project-title" >{project.title}</h3>
            <div className="tags">{project.date}</div>
          </div>
        </Link>

    }
    </VisibilitySensor>

  );
}
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  animation: PropTypes.bool.isRequired
}

export default Project;
