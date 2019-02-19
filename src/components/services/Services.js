import React from "react";
import Service from './Service'

const Services = () => {

  return (
    <section data-test="services-component" className="services">
			<div className="container wide">

        <Service
          data-test="services-service"
          id="utveckling"
          headline="Webb"
          text="Webbsidor och interaktiva applikationer, med användarvänliga system och de senaste teknikerna."
          isVisible={true} />

        <Service
          data-test="services-service"
          id="foralla"
          headline="Som funkar"
          text="Design och kod tillgänglig för alla. Webb som funkar lika bra med mobil, tv och skärmläsare."
          isVisible={true} />

        <Service
          data-test="services-service"
          id="heart"
          headline="För alla"
          text="Med kod som verktyg för att lyfta kampanjen och organisationer, med drivkraft att göra världen lite bättre."
          isVisible={true} />

      </div>
    </section>
  );

}

export default Services;
