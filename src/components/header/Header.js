import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Slogan from './Slogan'

const Header = ({onClick}) => {

  return (
    <section data-test="header-component" className="header">

      <Slogan />

      <div data-test="header-scrollarrow" onClick={onClick} className="scrollarrow header"></div>

  </section>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Header;
