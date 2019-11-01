import React from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from 'prop-types';

/**
 * Component for displaying a project
 * @param {object} props.project - The project
 * @param {bool} props.animation - If animation is true or false
 */
class Project extends React.Component {

  state = {visibilitySensorActive: false}

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
        >
        {({isVisible}) =>

          <Link data-test="project-component" to={`/projects/${project.id}`} className={`project ${project.id} ${isVisible ? 'visible' : 'invisible'}`}>
            <div data-test="project-image" className="image">
              <picture>
                <source type="image/webp" srcSet={require(`../../images/${project.listimg.url}.webp`)} />
                <img alt={project.listimg.alt} src={require(`../../images/${project.listimg.url}`)} />
              </picture>
            </div>

            <div data-test="project-info" className="info">
              <div className="date">{project.date}</div>
              <h3 className="project-title" >{project.title}</h3>
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
