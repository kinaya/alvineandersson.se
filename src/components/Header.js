import React, { Component} from "react";

const Header = ({}) => {

  return (
    <div className="container header">

      <div className="logo">
        <div className="name"><span>Alvine</span>Andersson</div>
        <div className="subheading">frilansande webbutvecklare</div>
      </div>

			<div className="inner">
        <p>Suspendisse potenti. Nulla quis egestas mi. Fusce lobortis et mauris eu interdum. Etiam aliquam non ligula et pulvinar. Vivamus ac felis at erat vulputate.</p>
        <span className="scrollarrow"></span>
			</div>
    </div>
  );

}

export default Header;
