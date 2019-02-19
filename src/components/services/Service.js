import React from "react";
import PropTypes from 'prop-types';

const Service = ({headline, text, id, isVisible}) => {

  return (

    <div data-test="component-service" className={`service ${id} ${isVisible ? 'visible': 'invisible'}`} >
      <h4 data-test="service-headline">{headline}</h4>
      <p data-test="service-paragraph">{text}</p>
    </div>

  );
}

Service.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired
}

export default Service;
