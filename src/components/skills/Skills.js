import React from "react";

const Skills = () => {

  return (
    <section data-test="skills-component" className="skills">
			<div className="container">

        <h2>Tekniker</h2>

        <div className="stacks">
          <div data-test="skills-skill" className="stack">
            <h4>MERN-stack</h4>
            <p>Applikationer med <strong>React/Redux</strong>, backend via <strong>Node.js</strong> och <strong>Express</strong> med <strong>MongoDB</strong> databas.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Drupal & Wordpress</h4>
            <p>Hemsidor med <strong>Drupal</strong> eller <strong>Wordpress</strong>. Plugins med <strong>PHP</strong> och <strong>SQL</strong>. Standard eller "headless" via <strong>REST</strong></p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Temautveckling</h4>
            <p><strong>Interaktionsdesign</strong>, <strong>HTML</strong>, <strong>CSS/SASS</strong> och <strong>JavaScript</strong>. Frameworks som <strong>Bootstrap</strong>, <strong>Semantic UI</strong> eller <strong>Materialize</strong>.</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Performance</h4>
            <p><strong>Progressive web apps</strong>, test av kodbas med <strong>Jest</strong> och <strong>Enzyme</strong>, användartester mot <strong>Accesibility guidelines</strong></p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Distribuering</h4>
            <p>Utveckling med <strong>Git</strong>, <strong>Webpack</strong>, <strong>Gulp</strong> och <strong>Docker</strong>. Distribuering via <strong>Apache/Cpanel</strong>, <strong>AWS</strong> eller <strong>Heroku</strong></p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>?</h4>
            <p>Ständig vidareutveckling och nyfikenhet på nya tekniker. Vad är er stack?</p>
          </div>

        </div>

        <div className="list">
          <p>Linux som utvecklingsmiljö. Grundläggande koll på Java/Android och Python. Gillar att bygga möjliga och omöjliga saker med Raspberry Pi eller Arduino, studerat media och kommunikation, van projektledare och en stjärna på att googla.</p>
        </div>

        <div className="bubbles large">
          <span></span> <span></span> <span></span> <span></span> <span></span>
        </div>

        <div className="bubbles small">
          <span></span> <span></span> <span></span> <span></span> <span></span>
          <span></span> <span></span> <span></span> <span></span> <span></span>
        </div>

			</div>
    </section>
  );

}

export default Skills;
