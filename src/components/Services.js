import React, { Component} from "react";
import VisibilitySensor from "react-visibility-sensor";
import Service from './Service'

//<Service id="opensource" headline="Open source" text="Delad glädje är dubbel glädje. Genom öppna verktyg och öppen källkod håller vi kostnaderna nere, och hjälps åt att använda teknik för att göra världen lite bättre" />
//<Service id="utveckling" headline="Utveckling" text="Komplett webbplats byggd med Drupal eller Wordpress. Installation, konfiguration, temautveckling, programmering av egna plugins, eller headless som RESTful Api." />
//<Service id="node" headline="Open source" text="Interaktiva applikationer med node.js och react. Allt från quiz, spel och flashiga plugins till fullskalliga webappar med databas och användarhantering." />
//<Service id="accessibility" headline="Tillgänglighet" text="Webb tillgänglig för alla, både i kod, form och innehåll. Webb som funkar lika bra på desktop, mobil och smartTv, eller med skärmläsare och röststyrning." />


const Services = ({}) => {

  return (
    <div className="container services">
			<div className="inner">
        <div className="wrapper">
          <Service id="utveckling" headline="Utveckling" text="Webbsidor och interaktiva applikationer, med användarvänliga system och de senaste teknikerna." />
          <Service id="foralla" headline="För alla" text="Design och kod tillgänglig för alla. Webb som funkar lika bra med mobil, tv och skärmläsare." />
          <Service id="heart" headline="open source" text="Med kod som verktyg för att lyfta kampanjen och organisationer, med drivkraft att göra världen lite bättre." />
        </div>
			</div>
    </div>
  );

}

export default Services;
