import React from "react";
import PropTypes from 'prop-types';
import VisibilitySensor from "react-visibility-sensor";

/**
 * Component for displaying a service
 * @param {string} props.headline - A headline for the service
 * @param {string} props.text - A text for the service
 */
class Service extends React.Component {

  state = {visibilitySensorActive: false}

  onChangeVisibility = isVisible => {
    this.setState({visibilitySensorActive: isVisible})
  }

  render() {

    const { headline, text } = this.props;

    return (
      <VisibilitySensor
        onChange={this.onChangeVisibility}
        active={!this.state.visibilitySensorActive}
        partialVisibility={true}
      >

      {({isVisible}) =>
        <div data-test="component-service" className={`service ${isVisible} ${isVisible ? 'visible': 'invisible'}`} >
          <h4 data-test="service-headline">{headline}</h4>
          <p data-test="service-paragraph">{text}</p>
        </div>
      }

      </VisibilitySensor>
    );
  }
}

Service.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Service;
