import React, { Component} from "react";

const Services = ({}) => {

  return (
    <div className="container services">
			<div className="inner">

        <div className="wrapper">

          <div className="service drupal">
            <h3>Drupal & Wordpress</h3>
            <p>Komplett webbplats byggd med Drupal eller Wordpress. Installation, konfiguration, temautveckling, programmering av egna plugins, eller "headless" som RESTful Api.</p>
          </div>

          <div className="service node">
            <h3>Node.js & React</h3>
            <p>Interaktiva applikationer med node.js och react. Allt från quiz, spel och flashiga plugins till fullskalliga webappar med databas och användarhantering.</p>
          </div>

          <div className="service accessibility">
            <h3>Tillgänglig webb</h3>
            <p>Webb tillgänglig för alla, både i kod, form och innehåll. Webb som funkar lika bra på desktop, mobil och smartTv, eller med skärmläsare och röststyrning.</p>
          </div>

          <div className="service development">
            <h3>Open source</h3>
            <p>Delad glädje är dubbel glädje. Genom öppna verktyg och öppen källkod håller vi kostnaderna nere, och hjälps åt att använda teknik för att göra världen lite bättre</p>
          </div>

        </div>

			</div>
    </div>
  );

}

export default Services;
