import React, { Component} from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

class Service extends React.Component {

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

    const  {headline, text, id} = this.props;

    return (

      <VisibilitySensor onChange={this.onChangeVisibility} active={!this.state.visible} partialVisibility={true} >
      {({isVisible}) =>
        <div className={isVisible ? `service ${id} visible` : `service ${id} invisible`}>
          <h3><span>{headline}</span></h3>
          <p>{text}</p>
        </div>
      }
      </VisibilitySensor>

    );
  }
}

export default Service;
