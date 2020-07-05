import React from "react";
import Service from './Service'
import ReactResizeDetector from 'react-resize-detector';

/**
 * Component for displaying services.
 */
const Services = ({scrollToContent, fullScreen, checkFullScreen}) => {

  return (
    <section data-test="services-component" className="services">
      <ReactResizeDetector onResize={(width, height, section) => checkFullScreen(width, height, 'services')} >
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
            text="Med kod som verktyg för att lyfta kampanjen och organisationer, med drivkraft att göra världen lite bättre."
          />

          {fullScreen && (
            <div data-test="header-scrollarrow" onClick={scrollToContent} className="scrollarrow"></div>
          )}
        </div>
      </ReactResizeDetector>
    </section>
  );

}

export default Services;
