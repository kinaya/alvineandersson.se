import React from "react";

/**
 * Component for displaying a footer.
 */
const Footer = () => {

  return (
    <section data-test="footer-component" className="footer">
			<div className="container">

        <div className="contact">
          <p>Webbutvecklare med 10+ års erfarenhet. På plats eller distans, stora eller små projekt, front- eller backend.</p>
          <p>Hittas vid tangentbordet, på cykel genom Göteborgs gator eller i fjällen i en hemmabyggd husbil.</p>
				  <a data-test="footer-link" href="mailto:hej@alvineandersson.se"><span>hej@alvineandersson.se</span></a>
          <a data-test="footer-link" href="https://github.com/kinaya"><span>kinaya@github</span></a>
          <a data-test="footer-link" href="https://tamkin.se"><span>tamkin.se</span></a>
        </div>

      </div>
    </section>
  );

}

export default Footer;
