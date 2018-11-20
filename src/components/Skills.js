import React, { Component} from "react";
import VisibilitySensor from "react-visibility-sensor";

const Skills = ({}) => {

  return (
    <div className="container skills">
			<div className="inner">

        <p><span className="label">Webteknologier och språk:</span> HTML5, CSS3 (+SASS), PHP, Node.js</p>

        <p><span className="label">Scripts/UI:</span> JavaScript, JQuery, Bootstrap, Underscore, Materialize</p>

        <p><span className="label">Frameworks:</span> React (+ Redux och next.js för SSR), Laravel, Symfony, Express.js</p>

        <p><span className="label">CMSs:</span> Drupal och Wordpress</p>

        <p><span className="label">Databaser och bestående data:</span> MySQL, MariaDB, PostgreSQL, MongoDB, Memcached, Redis</p>

        <p><span className="label">Testning och debug tools:</span> PHPUnit, Jest + Mocha, Mozilla Firebug, Chrome developer tools</p>

        <p><span className="label">RESTFul API:</span> Custom i node.js, Wordpress eller Drupal som headless</p>

        <p><span className="label">Package managers och andra verktyg:</span> git, npm, gulp, webpack, composer</p>

        <p><span className="label">Autenticering och behörigheter</span> OAuth, Basic Authentication, Token Authentication, JWT</p>

        <p><span className="label">Server, PaaS and distribuering:</span> Apache, Heroku, Docker</p>

        <p>Grundläggande koll på Java, Python, Angular, Vue, gillar att bygga möjliga och omöjliga saker med Raspberry Pi eller Arduino, studerat media och kommunikation, ofta bollplank för koncept och ux i projekt, van projektledare och en stjärna på att googla.</p>

			</div>
    </div>
  );

}

export default Skills;
