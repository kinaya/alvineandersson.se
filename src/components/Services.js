import React, { Component} from "react";
import VisibilitySensor from "react-visibility-sensor";
import Service from './Service'

const Services = ({}) => {

  return (
    <div className="container services">
			<div className="inner">
        <div className="wrapper">
          <Service id="drupal" headline="Drupal & Wordpress" text="Komplett webbplats byggd med Drupal eller Wordpress. Installation, konfiguration, temautveckling, programmering av egna plugins, eller headless som RESTful Api." />
          <Service id="node" headline="Node.js & React" text="Interaktiva applikationer med node.js och react. Allt från quiz, spel och flashiga plugins till fullskalliga webappar med databas och användarhantering." />
          <Service id="opensource" headline="Open source" text="Delad glädje är dubbel glädje. Genom öppna verktyg och öppen källkod håller vi kostnaderna nere, och hjälps åt att använda teknik för att göra världen lite bättre" />
          <Service id="accessibility" headline="Tilgänglig webb" text="Webb tillgänglig för alla, både i kod, form och innehåll. Webb som funkar lika bra på desktop, mobil och smartTv, eller med skärmläsare och röststyrning." />
        </div>
			</div>
    </div>
  );

}

export default Services;
