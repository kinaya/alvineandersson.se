import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Slogan from './Slogan'

const Header = ({onClick}) => {

  // Set the header to full height on all screens. Css-only not working on for example ipad
  let vh = window.innerHeight;
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
