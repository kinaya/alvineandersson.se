import React from "react";
import PropTypes from 'prop-types';
import Slogan from './Slogan'

/**
 * Component for displaying a `jumping` title.
 * @params {function} onClick - OnClick callback function
 */
const Header = ({onClick}) => {

  let vh = window.innerHeight; // Fix for full height
  const style = { 'height': `${vh}px`}

  return (
    <section data-test="header-component" className="header" style={style}>

      <Slogan />

      <div data-test="header-scrollarrow" onClick={onClick} className="scrollarrow header"></div>

    </section>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Header;
