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

<svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
</svg>

          <p>{text}</p>
        </div>
      }
      </VisibilitySensor>

    );
  }
}

export default Service;
