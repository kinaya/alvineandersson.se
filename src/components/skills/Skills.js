import React, { Component} from "react";

const Skills = ({}) => {

  return (
    <div id="skills" className="container skills">
			<div className="inner">

        <h2>Tekniker</h2>

        <div className="stacks">
          <div className="stack">
            <h4>Stack #1 MERN</h4>
            <p>Applikationer med <strong>React/Redux</strong> som frontend, backend API via <strong>Express</strong> byggt på <strong>node.js</strong> server och <strong>MongoDB</strong> databas. Routing, internalisering osv.</p>
          </div>

          <div className="stack">
            <h4>Stack #2 CMS</h4>
            <p>Hemsidor med <strong>Drupal</strong> eller <strong>Wordpress</strong>. Konfiguration, temautveckling och custom-made plugins. Standard eller med fristående frontend via REST Api</p>
          </div>
        </div>

        <div className="list">
          <h4>Skillcloud</h4>
          <p><span className="label">Språk/Frameworks:</span> HTML, Css/Sass, PHP, JavaScript, JQuery, React/Redux, Node.js, Express.js</p>
          <p><span className="label">CMS:</span> Drupal, Wordpress</p>
          <p><span className="label">Databaser:</span> MySQL/MariaDB, MongoDB</p>
          <p><span className="label">Testning:</span> Jest, Mocha</p>
          <p><span className="label">Tillgänglighet:</span> Accesibility guidelines, Wai-Aria</p>
          <p><span className="label">APIs:</span> Facebook Api, Google Api</p>
          <p><span className="label">Utveckling och distribuering:</span> git, webpack, Apache/Cpanel, Heroku, Docker</p>
          <p><span className="label">Annat:</span> SPA, Progressive Web apps, Service Workers, OAuth, JWT, Bootstrap, Materialize, SVG animation</p>
          <p>Grundläggande koll på Java/Android utveckling, samt Python. Gillar att bygga möjliga och omöjliga saker med Raspberry Pi eller Arduino, studerat media och kommunikation, ofta bollplank för koncept och ux i projekt, van projektledare och en stjärna på att googla.</p>
        </div>

        <div className="bubbles large">
          <span></span> <span></span> <span></span> <span></span> <span></span>
        </div>

        <div className="bubbles small">
          <span></span> <span></span> <span></span> <span></span> <span></span>
          <span></span> <span></span> <span></span> <span></span> <span></span>
        </div>

			</div>
    </div>
  );

}

export default Skills;