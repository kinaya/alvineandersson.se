import React, {useRef, useEffect} from "react";

/**
 * Component for displaying a footer.
 */
const Footer = ({sectionStyle, getContentHeight}) => {

  const contentRef = useRef()

  useEffect(() => {
    getContentHeight('footer', contentRef.current.offsetHeight)
    const resizeHandler = () => {
      getContentHeight('footer', contentRef.current.offsetHeight)
    }
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [contentRef.current])

  return (
    <section data-test="footer-component" className="footer" style={sectionStyle}>
			<div className="container" ref={contentRef}>

        <div className="contact">
          <p>Webbutvecklare med 10+ års erfarenhet. På plats eller distans, stora eller små projekt, front- eller backend.</p>
          <p>Hittas vid tangentbordet, på cykel genom Göteborgs gator eller i fjällen i en hemmabyggd husbil.</p>
				  <a data-test="footer-link" href="mailto:hej@alvineandersson.se"><span>hello@alvineandersson.se</span></a>
          <a data-test="footer-link" href="https://github.com/kinaya"><span>github.com/kinaya</span></a>
          <a data-test="footer-link" href="https://tamkin.se"><span>tamkin.se</span></a>
        </div>

      </div>
    </section>
  );

}

export default Footer;
