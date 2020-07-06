import React from "react";

/**
 * Component for displaying skills.
 * @param {function} props.scrollToContent - Function for triggering scroll
 * @param {boolean} props.fullScreen - Weather fullscreen mode is true or false
 */
const Skills = ({scrollToContent, fullScreen}) => {

  return (
    <section data-test="skills-component" className="skills" >
			<div className="container" >

        <h2>Tekniker</h2>

        <div className="stacks">
          <div data-test="skills-skill" className="stack">
            <h4>Frontend</h4>
            <p><strong>HTML</strong>, <strong>CSS/SASS</strong> och <strong>JavaScript</strong>, gärna <strong>React.js</strong>. Frameworks som <strong>Bootstrap</strong> eller <strong>Materialize</strong>.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Drupal & Wordpress</h4>
            <p>Konfigurering och teman. Plugins med <strong>PHP</strong> och <strong>SQL</strong>. Standard eller "headless" via <strong>RESTApi</strong>.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>MERN-stack</h4>
            <p>Applikationer med <strong>React.js/Redux</strong>. Backend via <strong>Node.js</strong> och <strong>Express</strong> med <strong>MongoDB</strong> databas.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Verktyg & miljö</h4>
            <p><strong>Linux</strong>, <strong>Git</strong>, TDD med <strong>Jest</strong> och <strong>Enzyme</strong>, <strong>Webpack</strong>, <strong>Heroku</strong> eller <strong>Apache</strong>. Leker med <strong>Docker</strong> och <strong>AWS</strong>.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Projekt</h4>
            <p><strong>Planering</strong> och <strong>UX</strong>. Nybygge eller vidareutveckling, problemlösning och <strong>underhåll</strong>.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Vidareutveckling</h4>
            <p>Envis, driven och nyfiken på nya tekniker. Sätter gärna tänderna i något jag inte kan än. <strong>Vad är er stack?</strong></p>
          </div>

        </div>

        {fullScreen && (
          <div data-test="header-scrollarrow" onClick={scrollToContent} className="scrollarrow scrollarrow-skills"></div>
        )}

			</div>
    </section>
  );

}

export default Skills;
