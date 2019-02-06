import React, { Component} from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

class Project extends React.Component {

  constructor(props) {
    super(props)
    this.state = {visible: false}
    this.onChangeVisibility = this.onChangeVisibility.bind(this);
  }

  // Only trigger animation once
  onChangeVisibility(isVisible) {
    this.setState({visible: isVisible})
  }

//       <div className={!animation ? "project" : (isVisible ? "project visible" : "project invisible")}>
//<div className={isVisible ? 'visible' : 'invisible'}>

  render() {

    const { project, animation } = this.props;

  return (
    <div className="project">

    <VisibilitySensor onChange={this.onChangeVisibility} active={!this.state.visible} partialVisibility={true} >
    {({isVisible}) =>

        <div className={isVisible ? 'visible' : 'invisible'}>

        <Link to={`/projects/${project.id}`} className="inner-div">
          <div className="image">
            <img src={require(`../../images/${project.listimg.url}`)} />
          </div>

          <div className="info">
            <div className="what"><span>{project.what}</span></div>
            <div className="title" >{project.title}</div>
            <div className="tags">{project.date}</div>
          </div>
        </Link>

      </div>
    }
    </VisibilitySensor>

    </div>


  );
}
}

export default Project;
