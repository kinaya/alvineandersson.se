import React, { Component} from "react";

const Footer = ({}) => {

  return (
    <div className="container footer">
			<div className="inner">

        <div className="contact">
          <h2>Kontakt</h2>
          <p>Bosatt i Göteborg. Trivs bäst i berg. Engagerad i boendegrupp. Tveka inte att ta kontakt!</p>
				  <a href="mailto:hej@alvineandersson.se"><span>hej@alvineandersson.se</span></a>
          <a href="https://github.com/kinaya"><span>kinaya@github</span></a>
          <a href="https://tamkin.se"><span>tamkin.se</span></a>
        </div>
        
			</div>
    </div>
  );

}

export default Footer;
