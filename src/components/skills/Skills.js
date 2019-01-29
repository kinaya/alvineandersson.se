import React, { Component} from "react";
import VisibilitySensor from "react-visibility-sensor";

const Skills = ({}) => {

  return (
    <div className="container skills">
			<div className="inner">

        <h2>Tekniker</h2>

        <div className="stacks">
          <div className="stack">
            <h4>#1 MERN</h4>
            <p>Applikationer med <strong>React/Redux</strong> som frontend, backend API via <strong>Express</strong> byggt på <strong>node.js</strong> server och <strong>MongoDB</strong> databas. Routing, internalisering osv.</p>
          </div>

          <div className="stack">
            <h4>#2 CMS</h4>
            <p>Hemsidor med <strong>Drupal</strong> eller <strong>Wordpress</strong>. Konfiguration, temautveckling och custom-made plugins. Standard eller med fristående frontend via REST Api</p>
          </div>
        </div>

        <div className="list">
          <h4>Namedropping</h4>
          <p><span className="label">Språk/Frameworks:</span> HTML, Css/Sass, PHP, JavaScript, JQuery, React/Redux, Node.js, Express.js</p>
          <p><span className="label">CMS:</span> Drupal, Wordpress, SquareSpace</p>
          <p><span className="label">Databaser:</span> MySQL, MariaDB, MongoDB</p>
          <p><span className="label">Testning:</span> PHPUnit, Jest, Mocha</p>
          <p><span className="label">Tekniker:</span> Service Workers, OAuth, JWT, Bootstrap, Materialize, SVG animation</p>
          <p><span className="label">Utveckling och distribuering:</span> git, webpack, Apache/Cpanel, Heroku, Docker</p>
          <p>Grundläggande koll på Java/Android utveckling, samt Python. Gillar att bygga möjliga och omöjliga saker med Raspberry Pi eller Arduino, studerat media och kommunikation, ofta bollplank för koncept och ux i projekt, van projektledare och en stjärna på att googla.</p>
        </div>

			</div>
    </div>
  );

}

export default Skills;
