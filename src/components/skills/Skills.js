import React from "react";

const Skills = () => {

  return (
    <section data-test="skills-component" className="skills">
			<div className="container">

        <h2>Tekniker</h2>

        <div className="stacks">
          <div data-test="skills-skill" className="stack">
            <h4>MERN-stack</h4>
            <p>Applikationer med <strong>React/Redux</strong>, backend via <strong>Express</strong> och <strong>node.js</strong> med <strong>MongoDB</strong> databas. Routing, internalisering osv</p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Drupal & Wordpress</h4>
            <p>Hemsidor med <strong>Drupal</strong> eller <strong>Wordpress</strong>. Custom-made plugins med <strong>PHP</strong> och <strong>MySQL</strong>. Standard eller headless via <strong>REST Api</strong></p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Temautveckling</h4>
            <p>15+ års med <strong>HTML</strong>, <strong>CSS/SASS</strong> och <strong>JavaScript</strong>. Frameworks som <strong>Bootstrap</strong> eller <strong>Materialize</strong>. Ofta bollplank för <strong>interkationsdesign</strong></p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Performance</h4>
            <p><strong>Progressive web apps</strong> som standard, test av kodbas med <strong>Jest</strong> och <strong>Enzyme</strong>, användartester mot <strong>Accesibility guidelines</strong></p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>Distribuering</h4>
            <p>Utveckling och distribuerng med <strong>Git</strong>, <strong>Webpack</strong>, <strong>Gulp</strong> och <strong>Docker</strong>. Servermiljö via <strong>Apache/Cpanel</strong>, <strong>Heroku</strong> eller <strong>Firebase</strong></p>
          </div>

          <div data-test="skills-skill" className="stack">
            <h4>?</h4>
            <p>Ständig vidareutveckling och nyfikenhet på nya tekniker. Vad är er stack?</p>
          </div>

        </div>

        <div className="list">
          <p>Grundläggande koll på Java/Android och Python. Gillar att bygga möjliga och omöjliga saker med Raspberry Pi eller Arduino, studerat media och kommunikation, van projektledare och en stjärna på att googla.</p>
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
