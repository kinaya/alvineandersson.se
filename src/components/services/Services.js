import React, { Component} from "react";
import Service from './Service'

const Services = ({}) => {

  return (
    <div className="container services">
			<div className="inner">
        <Service id="utveckling" headline="Webb" text="Webbsidor och interaktiva applikationer, med användarvänliga system och de senaste teknikerna." />
        <Service id="foralla" headline="Som funkar" text="Design och kod tillgänglig för alla. Webb som funkar lika bra med mobil, tv och skärmläsare." />
        <Service id="heart" headline="För alla" text="Med kod som verktyg för att lyfta kampanjen och organisationer, med drivkraft att göra världen lite bättre." />
			</div>
    </div>
  );

}

export default Services;
