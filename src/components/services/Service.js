import React, { useState } from "react";
import PropTypes from 'prop-types';
import VisibilitySensor from "react-visibility-sensor";

/**
 * Component for displaying a service
 * @param {string} props.headline - A headline for the service
 * @param {string} props.text - A text for the service
 */
const Service = ({headline, text}) => {

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
      <div data-test="component-service" className={`service ${isVisible} ${isVisible ? 'visible': 'invisible'}`} >
        <h4 data-test="service-headline">{headline}</h4>
        <p data-test="service-paragraph">{text}</p>
      </div>
    }

    </VisibilitySensor>
  );

}

Service.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Service;
