import React from "react";
import PropTypes from 'prop-types';
import Slogan from './Slogan'

/**
 * Component for displaying a `jumping` title.
 * @params {function} onClick - OnClick callback function
 */
const Header = ({scrollToContent}) => {

  let vh = window.innerHeight;
  const style = { 'height': `${vh}px`}

  return (
    <section data-test="header-component" className="header" style={style}>

      <Slogan />

      <div data-test="header-scrollarrow" onClick={() => scrollToContent()} className="scrollarrow header"></div>

    </section>
  );
}

Header.propTypes = {
  scrollToContent: PropTypes.func.isRequired
}

export default Header;
