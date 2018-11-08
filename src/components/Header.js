import React, { Component} from "react";

const Header = ({}) => {

  return (
    <div className="container header">

      <div className="logo">
        <div className="name"><span>Alvine</span> Andersson</div>
        <div className="subheading">- frilansande webbutvecklare - </div>
      </div>

			<div className="inner">
        <h1 className="slogan"><span>Med kod</span> <span>som verktyg</span> <span>för</span> <span>revolutionen</span></h1>
        <span className="scrollarrow"></span>
			</div>
    </div>
  );

}

export default Header;
