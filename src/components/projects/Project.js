import React, { useState } from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from 'prop-types';

/**
 * Component for displaying a project
 * @param {object} props.project - The project
 * @param {bool} props.animation - If animation is true or false
 */
const Project = ({project, animation, filtering, faded}) => {

  const [visibilitySensorActive, setVisibilitySensorActive] = useState(false)

  const _onChangeVisibility = isVisible => {
    setVisibilitySensorActive(isVisible)
  }



  return (
    <VisibilitySensor
      onChange={_onChangeVisibility}
      active={!visibilitySensorActive}
      partialVisibility={true}
      >

      {({isVisible}) =>

        <Link data-test="project-component" to={`/projects/${project.id}`} className={`project faded-${faded} filtering-${filtering} ${project.id} ${isVisible ? 'visible' : 'invisible'}`}>
          <div className="inner">
            <div data-test="project-image" className="image">
              <picture>
                <source type="image/webp" srcSet={require(`../../images/${project.listimg.url}.webp`)} />
                <img alt={project.listimg.alt} src={require(`../../images/${project.listimg.url}`)} />
              </picture>
            </div>
          </div>
        </Link>

      }
    </VisibilitySensor>
  );

}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  animation: PropTypes.bool.isRequired
}

export default Project;
