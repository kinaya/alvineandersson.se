import React from "react";
import Service from './Service'

/**
 * Component for displaying services.
 * @param {function} props.scrollToContent - Function for triggering scroll
 * @param {boolean} props.fullScreen - Weather fullscreen mode is true or false
 */
const Services = ({scrollToContent, fullScreen}) => {

  return (
    <section data-test="services-component" className="services">
			<div className="container wide">

        <Service
          headline="Webb"
          text="Webbsidor och interaktiva applikationer, med användarvänliga system och moderna tekniker."
        />

        <Service
          headline="Som funkar"
          text="Design och kod tillgänglig för alla. Webb som funkar lika bra med mobil, tv och skärmläsare."
        />

        <Service
          headline="För alla"
          text="Med kod som verktyg för att lyfta kampanjer och organisationer, med drivkraft att göra världen lite bättre."
        />

        {fullScreen && (
          <div data-test="header-scrollarrow" onClick={scrollToContent} className="scrollarrow"></div>
        )}
      </div>
    </section>
  );

}

export default Services;
