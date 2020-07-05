import React, {forwardRef} from "react";
import ReactResizeDetector from 'react-resize-detector';

/**
 * Component for displaying a footer.
 */
const Footer = forwardRef(({checkFullScreen}, ref) => {

  return (
    <section ref={ref} data-test="footer-component" className="footer">
      <ReactResizeDetector onResize={(width, height, section) => checkFullScreen(width, height, 'footer')} >
  			<div className="container">
          <div className="contact">
            <p>Webbutvecklare med 10+ års erfarenhet. På plats eller distans, stora eller små projekt, front- eller backend.</p>
            <p>Hittas vid tangentbordet, på cykel genom Göteborgs gator eller i fjällen i en hemmabyggd husbil.</p>
  				  <a data-test="footer-link" href="mailto:hej@alvineandersson.se"><span>hello@alvineandersson.se</span></a>
            <a data-test="footer-link" href="https://github.com/kinaya"><span>github.com/kinaya</span></a>
            <a data-test="footer-link" href="https://tamkin.se"><span>tamkin.se</span></a>
          </div>
        </div>
      </ReactResizeDetector>
    </section>
  );

})

export default Footer;
