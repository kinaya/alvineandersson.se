import React from "react";

const Footer = () => {

  return (
    <section data-test="footer-component" className="footer">
			<div className="container">

        <div className="contact">
          <h3 data-test="footer-headline">Kontakt</h3>
          <p>Bosatt i Göteborg. Trivs bäst i berg. Engagerad i boendegrupp. Tveka inte att ta kontakt!</p>
				  <a data-test="footer-link" href="mailto:hej@alvineandersson.se"><span>hej@alvineandersson.se</span></a>
          <a data-test="footer-link" href="https://github.com/kinaya"><span>kinaya@github</span></a>
          <a data-test="footer-link" href="https://tamkin.se"><span>tamkin.se</span></a>
        </div>

			</div>
    </section>
  );

}

export default Footer;
