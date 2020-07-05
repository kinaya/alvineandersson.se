import React, {forwardRef} from "react";

/**
 * Component for displaying skills.
 */
const Skills = forwardRef(({scrollToContent, getContentHeight, fullScreen}, ref) => {

  return (
    <section ref={ref} data-test="skills-component" className="skills" >
			<div className="container" >

        <h2>Tekniker</h2>

        <div className="stacks">
          <div data-test="skills-skill" className="stack">
            <h4>Frontend</h4>
            <p><strong>HTML</strong>, <strong>CSS/SASS</strong> och <strong>JavaScript</strong>, gärna <strong>React</strong>. Frameworks som <strong>Bootstrap</strong>, <strong>Semantic UI</strong> eller <strong>Materialize</strong>.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Drupal & Wordpress</h4>
            <p>Konfigurering, temautveckling och plugins/moduler. Standard eller "headless" via <strong>RESTApi</strong>.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>MERN-stack</h4>
            <p>Applikationer med <strong>React/Redux</strong>. Backend via <strong>Node.js</strong> och <strong>Express</strong> med <strong>MongoDB</strong> databas.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Performance</h4>
            <p><strong>PWA's</strong>, TDD med <strong>Jest</strong> och <strong>Enzyme</strong>, användartester mot <strong>Accesibility guidelines</strong>.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Distribuering</h4>
            <p>Utveckling med <strong>Git</strong>, <strong>Webpack</strong>, <strong>Gulp</strong> och <strong>Heroku</strong>. Leker med <strong>Docker</strong> och <strong>AWS</strong>.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>?</h4>
            <p>Ständig vidareutveckling och nyfikenhet på nya tekniker. Vad är er stack?</p>
          </div>

        </div>

        {fullScreen && (
          <div data-test="header-scrollarrow" onClick={scrollToContent} className="scrollarrow scrollarrow-skills"></div>
        )}

			</div>
    </section>
  );

})

export default Skills;
