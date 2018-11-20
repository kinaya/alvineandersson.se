import React, { Component} from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

class ProjectTwo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {visible: false}
    this.onChangeVisibility = this.onChangeVisibility.bind(this);
  }

  // Only trigger animation once
  onChangeVisibility(isVisible) {
    this.setState({visible: isVisible})
  }

  render() {

    const  {project, navigate} = this.props;

    return (
      <div className="projectTwo">
        <VisibilitySensor intervalCheck={false} scrollCheck={true} onChange={this.onChangeVisibility} active={!this.state.visible} partialVisibility={true} >
        {({isVisible}) =>
          <Link onClick={() =>  navigate('right')} className={isVisible ? 'visible' : 'invisible'} to={`/projects/${project.id}`} >
            <div className="image">
              <img src={project.img.url} />
            </div>
              <h3 className="title"><span>{project.title}</span></h3>
          </Link>
        }
        </VisibilitySensor>
      </div>
    );
  }
}

export default ProjectTwo;
